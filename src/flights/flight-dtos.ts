import { Flight } from './flight';
import { BaseModelKeys } from '../libs/base.model';
import { ApiProperty } from '@nestjs/swagger';
import { PassengerDto } from '../passengers/passenger-dtos';
import { Passenger } from 'src/passengers/passenger';

export class FlightDtoCreate
  implements Omit<Flight, BaseModelKeys | 'passengers' | 'passenger'>
{
  @ApiProperty()
  landingDate: Date;
  @ApiProperty()
  passengersIds: string[];
  @ApiProperty()
  takeOffDate: Date;
  passenger: string;
}

export class FlightDto implements Flight {
  passenger: Passenger;
  @ApiProperty()
  _id: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  deletedAt: Date | null;
  @ApiProperty()
  landingDate: Date;
  @ApiProperty()
  passengers: PassengerDto[];
  @ApiProperty()
  takeOffDate: Date;
  @ApiProperty()
  updatedAt: Date;
}
