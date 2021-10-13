import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { FlightEntity } from '../entities/flight.entity';

@EntityRepository(FlightEntity)
export default class FlightsRepository extends BaseRepository<FlightEntity> {}
