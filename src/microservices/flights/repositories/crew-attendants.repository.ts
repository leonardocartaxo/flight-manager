import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { CrewAttendantEntity } from '../entities/crew-attendants.entity';

@EntityRepository(CrewAttendantEntity)
export default class CrewAttendantsRepository extends BaseRepository<CrewAttendantEntity> {}
