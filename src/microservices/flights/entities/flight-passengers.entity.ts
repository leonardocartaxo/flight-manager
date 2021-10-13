import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../libs/base-entity';
import { FlightEntity } from './flight.entity';
import { CustomerEntity } from '../../persons/entities/customer.entity';

@Entity('flightPassengers')
export class FlightPassengerEntity extends BaseEntity {
  @Column()
  flightId: string;

  @ManyToOne(() => FlightEntity)
  @JoinColumn()
  flight: FlightEntity;

  @Column()
  passengerId: string;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn()
  passenger: CustomerEntity;
}
