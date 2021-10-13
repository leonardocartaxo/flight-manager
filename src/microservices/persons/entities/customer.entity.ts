import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../libs/base-entity';
import { FlightPassengerEntity } from '../../flights/entities/flight-passengers.entity';
import { PersonEntity } from './person.entity';

@Entity('customers')
export class CustomerEntity extends BaseEntity {
  @Column({ nullable: true })
  personId?: string;

  @OneToOne(() => CustomerEntity, { cascade: true })
  @JoinColumn()
  person: PersonEntity;

  @OneToMany(() => FlightPassengerEntity, (entity) => entity.passenger, {
    cascade: true,
  })
  flights?: FlightPassengerEntity[];
}
