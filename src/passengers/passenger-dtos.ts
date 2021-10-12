import { BaseModelKeys } from '../libs/base.model';
import { Passenger } from './passenger';
import { ApiProperty } from '@nestjs/swagger';

export class PassengerDtoCreate implements Omit<Passenger, BaseModelKeys> {
  @ApiProperty()
  document: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
}

export class PassengerDto implements Passenger {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  deletedAt: Date | null;
  @ApiProperty()
  document: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  updatedAt: Date;
}

export const toPassengerDto = (entity: Passenger): PassengerDto => {
  return {
    ...entity,
  };
};
