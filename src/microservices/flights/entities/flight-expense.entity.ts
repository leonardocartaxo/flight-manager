import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../libs/base-entity';
import { FlightEntity } from './flight.entity';

@Entity('flightExpenses')
export class FlightExpenseEntity extends BaseEntity {
  @Column()
  flightId: string;

  @OneToOne(() => FlightEntity, { cascade: true })
  @JoinColumn()
  flight: FlightEntity;

  @Column({ type: 'float' })
  fuelAmount: number;

  @Column({ type: 'int' })
  fuelValueCents: number;

  @Column({ type: 'int' })
  mealServiceValueCents: number;
}
