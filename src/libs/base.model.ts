export abstract class BaseModel {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export type BaseModelKeys = '_id' | 'createdAt' | 'updatedAt' | 'deletedAt';
