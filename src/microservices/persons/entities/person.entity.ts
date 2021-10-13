import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../libs/base-entity';

@Entity('persons')
export class PersonEntity extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  document: string;

  @Column()
  birthDate: Date;

  @Column({ nullable: true })
  address?: string;
}
