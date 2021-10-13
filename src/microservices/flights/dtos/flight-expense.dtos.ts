import { BaseEntityKeys } from '../../../libs/base-entity';
import { FlightEntity } from '../entities/flight.entity';
import { FlightExpenseEntity } from '../entities/flight-expense.entity';

export class FlightExpenseDtoCreateBulk
  implements Omit<FlightExpenseEntity, BaseEntityKeys | 'flight' | 'flightId'>
{
  fuelAmount: number;
  fuelValueCents: number;
  mealServiceValueCents: number;
}

export class FlightExpenseDtoCreate
  implements Omit<FlightExpenseEntity, BaseEntityKeys | 'flight'>
{
  flightId: string;
  fuelAmount: number;
  fuelValueCents: number;
  mealServiceValueCents: number;
}

export class FlightExpenseDtoUpdate extends FlightExpenseDtoCreate {}

export class FlightExpenseDto implements FlightExpenseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  flight: FlightEntity;
  flightId: string;
  fuelAmount: number;
  fuelValueCents: number;
  mealServiceValueCents: number;
}
