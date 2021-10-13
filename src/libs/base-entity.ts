import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', default: null })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: null })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deletedAt: Date | null;
}

export type BaseEntityKeys = 'id' | 'createdAt' | 'updatedAt' | 'deletedAt';
