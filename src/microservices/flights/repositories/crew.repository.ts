import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { CrewEntity } from '../entities/crew.entity';

@EntityRepository(CrewEntity)
export default class CrewsRepository extends BaseRepository<CrewEntity> {}
