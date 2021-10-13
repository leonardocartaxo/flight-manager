import { FlightPassengerEntity } from '../entities/flight-passengers.entity';
import { BaseEntityKeys } from '../../../libs/base-entity';
import { FlightEntity } from '../entities/flight.entity';
import { CustomerEntity } from '../../persons/entities/customer.entity';

export class FlightPassengerDtoCreateBulk
  implements
    Omit<
      FlightPassengerEntity,
      BaseEntityKeys | 'flight' | 'flightId' | 'passenger'
    >
{
  passengerId: string;
}

export class FlightPassengerDtoCreate
  implements
    Omit<FlightPassengerEntity, BaseEntityKeys | 'flight' | 'passenger'>
{
  flightId: string;
  passengerId: string;
}

export class FlightPassengerDtoUpdate implements FlightPassengerDtoCreate {
  flightId: string;
  passengerId: string;
}

export class FlightPassengerDto implements FlightPassengerEntity {
  id: string;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
  flight: FlightEntity;
  flightId: string;
  passenger: CustomerEntity;
  passengerId: string;
}
