import { Injectable } from '@nestjs/common';
import { toFlightDto } from '../dtos/flight.dtos';
import { BaseService } from '../../../libs/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import FlightPassengersRepository from '../repositories/flight-passengers.repository';
import { FlightPassengerEntity } from '../entities/flight-passengers.entity';
import {
  FlightPassengerDto,
  FlightPassengerDtoCreate,
  FlightPassengerDtoUpdate,
} from '../dtos/flight-passenger.dtos';

@Injectable()
export class FlightPassengersService extends BaseService<
  FlightPassengerEntity,
  FlightPassengerDto,
  FlightPassengerDtoCreate,
  FlightPassengerDtoUpdate
> {
  constructor(
    @InjectRepository(FlightPassengersRepository)
    private readonly flightPassengersRepository: FlightPassengersRepository,
  ) {
    super(flightPassengersRepository, toFlightDto, ['flight', 'passenger']);
  }
}
