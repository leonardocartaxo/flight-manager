import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Flight, FlightDocument } from './flight';
import { FlightDto, FlightDtoCreate } from './flight-dtos';
import { BaseService } from '../libs/base.service';
import { toPassengerDto } from '../passengers/passenger-dtos';
import * as mongoose from 'mongoose';
import { Passenger, PassengerDocument } from "../passengers/passenger";

@Injectable()
export class FlightsService extends BaseService<
  Flight,
  FlightDto,
  FlightDtoCreate,
  FlightDtoCreate
> {
  constructor(
    @InjectModel(Flight.name)
    private flightDocumentModel: Model<FlightDocument>,
    @InjectModel(Passenger.name)
    private passengerDocumentModel: Model<PassengerDocument>,
  ) {
    super(flightDocumentModel, toPassengerDto, ['passengers']);
  }

  async create(createDto: FlightDtoCreate): Promise<FlightDto> {
    // return await super.create({
    //   ...createDto,
    //   passenger: new ObjectId(createDto?.passengersIds[0]) as any,
    //   passengersIds: createDto?.passengersIds?.map(
    //     (it) => new mongoose.Schema.Types.ObjectId(it) as any,
    //   ),
    // });
  }
}
