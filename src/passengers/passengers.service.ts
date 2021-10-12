import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Passenger, PassengerDocument } from './passenger';
import {
  PassengerDto,
  PassengerDtoCreate,
  toPassengerDto,
} from './passenger-dtos';
import { BaseService } from '../libs/base.service';

@Injectable()
export class PassengersService extends BaseService<
  Passenger,
  PassengerDto,
  PassengerDtoCreate,
  PassengerDtoCreate
> {
  constructor(
    @InjectModel(Passenger.name)
    private passengerDocumentModel: Model<PassengerDocument>,
  ) {
    super(passengerDocumentModel, toPassengerDto);
  }
}
