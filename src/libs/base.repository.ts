import {
  DeepPartial,
  DeleteResult,
  EntityManager,
  FindConditions,
  ObjectID,
  QueryRunner,
  RemoveOptions,
  Repository,
  SaveOptions,
  TransactionManager,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export default class BaseRepository<Entity> extends Repository<Entity> {
  public async getAll(populateRelations: string[] = []): Promise<Entity[]> {
    return await this.find({ relations: populateRelations });
  }

  async getNewQueryRunner(): Promise<QueryRunner> {
    const queryRunner = this.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    return queryRunner;
  }

  public async getById(
    id,
    populateRelations: string[] = [],
    @TransactionManager() manager?: EntityManager,
  ): Promise<Entity> {
    if (manager) {
      return await manager.findOne(this.target, id, {
        relations: populateRelations,
      });
    }

    return await this.findOne(id, { relations: populateRelations });
  }

  async save<T extends DeepPartial<Entity>>(
    entity: T,
    options?: SaveOptions,
    @TransactionManager() manager?: EntityManager,
  ): Promise<T & Entity> {
    if (manager) {
      const createdEntity = this.create(entity);
      const transientEntity = await manager.save(createdEntity, options);

      return transientEntity as T & Entity;
    }

    return await super.save(entity, options);
  }

  async savePartial<T extends DeepPartial<Entity>>(
    entity: T,
    options?: SaveOptions,
    @TransactionManager() manager?: EntityManager,
  ): Promise<T & Entity> {
    if (manager) {
      const createdEntity = this.create(entity);
      const transientEntity = await manager.save(createdEntity, options);

      return transientEntity as T & Entity;
    }

    return await super.save(entity, options);
  }

  async update(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectID
      | ObjectID[]
      | FindConditions<Entity>,
    partialEntity: QueryDeepPartialEntity<Entity>,
    @TransactionManager() manager?: EntityManager,
  ): Promise<UpdateResult> {
    if (manager) {
      return await manager.update(this.target, criteria, partialEntity);
    }

    return await super.update(criteria, partialEntity);
  }

  async updatePartial(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectID
      | ObjectID[]
      | FindConditions<Entity>,
    partialEntity: QueryDeepPartialEntity<Entity>,
    @TransactionManager() manager?: EntityManager,
  ): Promise<UpdateResult> {
    if (manager) {
      return await manager.update(this.target, criteria, partialEntity);
    }

    return await super.update(criteria, partialEntity);
  }

  async softRemove<T extends DeepPartial<Entity>>(
    entity: T,
    options?: SaveOptions,
    @TransactionManager() manager?: EntityManager,
  ): Promise<T & Entity> {
    if (manager) {
      const transientRemovedEntity = await manager.softRemove(
        this.target,
        entity,
        options,
      );
      return transientRemovedEntity as T & Entity;
    }

    return await super.softRemove(entity, options);
  }

  async softDelete(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectID
      | ObjectID[]
      | FindConditions<Entity>,
    @TransactionManager() manager?: EntityManager,
  ): Promise<UpdateResult> {
    if (manager) {
      return await manager.softDelete(this.target, criteria);
    }

    return await super.softDelete(criteria);
  }

  async removeEntity(
    entity: Entity,
    options?: RemoveOptions,
    @TransactionManager() manager?: EntityManager,
  ): Promise<Entity> {
    if (manager) {
      return await manager.remove(this.target, entity);
    }
    return await super.remove(entity, options);
  }

  async removeEntities(
    entities: Entity[],
    options?: RemoveOptions,
    @TransactionManager() manager?: EntityManager,
  ): Promise<Entity[]> {
    if (manager) {
      return await manager.remove(this.target, entities);
    }
    return await super.remove(entities, options);
  }

  async delete(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectID
      | ObjectID[]
      | FindConditions<Entity>,
    @TransactionManager() manager?: EntityManager,
  ): Promise<DeleteResult> {
    if (manager) {
      return await manager.delete(this.target, criteria);
    }
    return await super.delete(criteria);
  }
}
