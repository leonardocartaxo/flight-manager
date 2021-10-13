import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { PilotEntity } from '../entities/pilot.entity';

@EntityRepository(PilotEntity)
export default class PilotsRepository extends BaseRepository<PilotEntity> {}
