import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { AirportEntity } from '../entities/airport.entity';

@EntityRepository(AirportEntity)
export class AirportsRepository extends BaseRepository<AirportEntity> {}
