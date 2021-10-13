import BaseRepository from './base.repository';
import {
  EntityManager,
  QueryRunner,
  RemoveOptions,
  SaveOptions,
  TransactionManager,
} from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseService<Entity, Dto, CreateDto, UpdateDto> {
  protected constructor(
    private readonly baseRepository: BaseRepository<Entity>,
    // eslint-disable-next-line @typescript-eslint/ban-types
    private readonly funcEntityToDto: Function,
    protected readonly populateRelations: string[] = [],
  ) {}

  async getNewQueryRunner(): Promise<QueryRunner> {
    return await this.baseRepository.getNewQueryRunner();
  }

  async create(
    createDto: CreateDto,
    options?: SaveOptions,
    @TransactionManager() manager?: EntityManager,
  ): Promise<Dto> {
    const entity = await this.baseRepository.save(createDto, options, manager);

    return this.funcEntityToDto(entity);
  }

  async getEntity(
    id: string,
    @TransactionManager() manager?: EntityManager,
    populateRelations: string[] = this.populateRelations,
  ): Promise<Entity> {
    const entity = await this.baseRepository.getById(
      id,
      populateRelations,
      manager,
    );
    if (!entity) throw new NotFoundException();

    return entity;
  }

  async get(
    id: string,
    @TransactionManager() manager?: EntityManager,
    populateRelations: string[] = this.populateRelations,
  ): Promise<Dto> {
    const entity = await this.getEntity(id, manager, populateRelations);
    if (!entity) throw new NotFoundException();

    return this.funcEntityToDto(entity);
  }

  async getAll(
    populateRelations: string[] = this.populateRelations,
  ): Promise<Dto[]> {
    const entities = await this.baseRepository.getAll(populateRelations);

    if (!entities) {
      throw new Error('Error on BaseService.getAll()');
    }

    return entities.map((it) => this.funcEntityToDto(it));
  }

  async update(
    id: string,
    updateDto: UpdateDto,
    options?: SaveOptions,
    @TransactionManager() manager?: EntityManager,
  ): Promise<Dto> {
    await this.baseRepository.update(id, updateDto, manager);

    return await this.get(id);
  }

  async updatePartial(
    id: string,
    updateDto: QueryDeepPartialEntity<Entity>,
    options?: SaveOptions,
    @TransactionManager() manager?: EntityManager,
  ): Promise<Dto> {
    await this.baseRepository.updatePartial(id, updateDto, manager);

    return await this.get(id);
  }

  async softDelete(
    id: string,
    @TransactionManager() manager?: EntityManager,
  ): Promise<boolean> {
    const updateResult = await this.baseRepository.softDelete(id, manager);

    return updateResult.affected > 0;
  }

  async delete(
    id: string,
    @TransactionManager() manager?: EntityManager,
  ): Promise<boolean> {
    const updateResult = await this.baseRepository.delete(id, manager);

    return updateResult.affected > 0;
  }

  async remove(
    entity: Entity,
    options?: RemoveOptions,
    @TransactionManager() manager?: EntityManager,
  ): Promise<boolean> {
    const entityRemoved = await this.baseRepository.removeEntity(
      entity,
      options,
      manager,
    );

    return !!entityRemoved;
  }
}
