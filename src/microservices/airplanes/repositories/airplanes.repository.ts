import { EntityRepository } from 'typeorm';
import { AirplaneEntity } from '../entities/airplane.entity';
import BaseRepository from '../../../libs/base.repository';

@EntityRepository(AirplaneEntity)
export class AirplanesRepository extends BaseRepository<AirplaneEntity> {}
