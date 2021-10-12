import { BaseService } from './base.service';
import { handleControllerGenericErrors } from './base.error-handler';

export abstract class BaseController<Entity, Dto, CreateDto, UpdateDto> {
  protected constructor(
    private baseService: BaseService<Entity, Dto, CreateDto, UpdateDto>,
  ) {}

  public async create(createDto: CreateDto): Promise<Dto> {
    try {
      return await this.baseService.create(createDto);
    } catch (error) {
      handleControllerGenericErrors(error);
    }
  }

  async get(id: string): Promise<Dto> {
    try {
      return await this.baseService.get(id);
    } catch (error) {
      handleControllerGenericErrors(error);
    }
  }

  async getAll(): Promise<Dto[]> {
    try {
      return await this.baseService.getAll();
    } catch (error) {
      handleControllerGenericErrors(error);
    }
  }

  async update(id: string, updateDto: UpdateDto): Promise<Dto> {
    try {
      return await this.baseService.update(id, updateDto);
    } catch (error) {
      handleControllerGenericErrors(error);
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      return await this.baseService.delete(id);
    } catch (error) {
      handleControllerGenericErrors(error);
      return null;
    }
  }
}
