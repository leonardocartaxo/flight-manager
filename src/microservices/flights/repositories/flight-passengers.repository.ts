import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { FlightPassengerEntity } from '../entities/flight-passengers.entity';

@EntityRepository(FlightPassengerEntity)
export default class FlightPassengersRepository extends BaseRepository<FlightPassengerEntity> {}
