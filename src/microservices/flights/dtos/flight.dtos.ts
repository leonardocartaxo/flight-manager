import { FlightEntity } from '../entities/flight.entity';
import { BaseEntityKeys } from '../../../libs/base-entity';
import { AirplaneEntity } from '../../airplanes/entities/airplane.entity';
import { CrewEntity } from '../entities/crew.entity';
import { FlightExpenseEntity } from '../entities/flight-expense.entity';
import { AirportEntity } from '../../airports/entities/airport.entity';
import { FlightPassengerEntity } from '../entities/flight-passengers.entity';
import { FlightExpenseDtoCreateBulk } from './flight-expense.dtos';
import { CrewDtoCreateBulk } from './flight-crew.dtos';
import { FlightPassengerDtoCreateBulk } from './flight-passenger.dtos';

export class FlightDtoCreate
  implements
    Omit<
      FlightEntity,
      | BaseEntityKeys
      | 'airplane'
      | 'crewId'
      | 'expenseId'
      | 'landingAirport'
      | 'takeOffAirport'
      | 'passengers'
      | 'expense'
      | 'crew'
    >
{
  airplaneId?: string;
  landingDate?: Date;
  takeOffDate?: Date;
  landingAirportId?: string;
  takeOffAirportId?: string;
  crew?: CrewDtoCreateBulk;
  expense?: FlightExpenseDtoCreateBulk;
  passengers?: FlightPassengerDtoCreateBulk[];
}
export class FlightDtoUpdate extends FlightDtoCreate {}

export class FlightDto implements FlightEntity {
  airplane: AirplaneEntity;
  airplaneId: string;
  createdAt: Date;
  crew: CrewEntity;
  crewId: string;
  deletedAt: Date | null;
  expense: FlightExpenseEntity;
  expenseId: string;
  id: string;
  landingAirport: AirportEntity;
  landingAirportId: string;
  landingDate: Date;
  passengers: FlightPassengerEntity[];
  takeOffAirport: AirportEntity;
  takeOffAirportId: string;
  takeOffDate: Date;
  updatedAt: Date;
}

export const toFlightDto = (entity: FlightEntity): FlightDto => {
  return <FlightDto>{
    ...entity,
    // passengers: entity.passengers,
    // crew: entity.crew,
    // expense: entity.expense,
  };
};
