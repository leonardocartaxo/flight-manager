import { Model } from 'mongoose';

export abstract class BaseService<Entity, Dto, CreateDto, UpdateDto> {
  protected constructor(
    private model: Model<Entity>,
    // eslint-disable-next-line @typescript-eslint/ban-types
    private mapperEntityToDto: Function,
    private relations: string[] = [],
  ) {}

  async create(createDto: CreateDto): Promise<Dto> {
    const inserted = await this.model.insertMany(createDto);
    const entity = await this.model.create(createDto);

    return this.mapperEntityToDto(this.handleIfHasDoc(entity));
  }

  async get(id: string): Promise<Dto> {
    const entity = await this.model.findById(id).exec();

    return this.mapperEntityToDto(this.handleIfHasDoc(entity));
  }

  async getAll(): Promise<Dto[]> {
    const list = await this.model.find().populate(this.relations).exec();

    return list?.map((it) => this.mapperEntityToDto(this.handleIfHasDoc(it)));
  }

  async update(id: string, updateDto: UpdateDto): Promise<Dto> {
    const entity = await this.model.findByIdAndUpdate(id, updateDto);

    return this.mapperEntityToDto(this.handleIfHasDoc(entity));
  }

  async delete(id: string): Promise<boolean> {
    await this.model.findByIdAndDelete(id);

    return true;
  }

  handleIfHasDoc(obj: any): any {
    return (obj as unknown as any)?._doc ?? obj;
  }
}
