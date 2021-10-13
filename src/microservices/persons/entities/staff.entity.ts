import { BaseEntity } from '../../../libs/base-entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { PersonEntity } from './person.entity';
import { CustomerEntity } from './customer.entity';

@Entity('staffs')
export class StaffEntity extends BaseEntity {
  @Column({ nullable: true })
  personId?: string;

  @OneToOne(() => CustomerEntity, { cascade: true })
  @JoinColumn()
  person: PersonEntity;
}
