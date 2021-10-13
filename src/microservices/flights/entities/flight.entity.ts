import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '../../../libs/base-entity';
import { CrewEntity } from './crew.entity';
import { AirportEntity } from '../../airports/entities/airport.entity';
import { AirplaneEntity } from '../../airplanes/entities/airplane.entity';
import { FlightExpenseEntity } from './flight-expense.entity';
import { FlightPassengerEntity } from './flight-passengers.entity';

@Entity('flights')
export class FlightEntity extends BaseEntity {
  @Column({ nullable: true })
  takeOffDate?: Date;

  @Column({ nullable: true })
  landingDate?: Date;

  @Column({ nullable: true })
  landingAirportId?: string;

  @ManyToOne(() => AirportEntity)
  @JoinColumn()
  landingAirport?: AirportEntity;

  @Column({ nullable: true })
  takeOffAirportId?: string;

  @ManyToOne(() => AirportEntity)
  @JoinColumn()
  takeOffAirport?: AirportEntity;

  @Column({ nullable: true })
  airplaneId?: string;

  @ManyToOne(() => AirplaneEntity)
  @JoinColumn()
  airplane?: AirplaneEntity;

  @Column({ nullable: true })
  crewId?: string;

  @OneToOne(() => CrewEntity)
  @JoinColumn()
  crew?: CrewEntity;

  @Column({ nullable: true })
  expenseId?: string;

  @OneToOne(() => FlightExpenseEntity)
  @JoinColumn()
  expense?: FlightExpenseEntity;

  @OneToMany(() => FlightPassengerEntity, (entity) => entity.flight)
  @JoinColumn()
  passengers?: FlightPassengerEntity[];
}
