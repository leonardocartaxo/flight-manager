import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { StaffEntity } from '../entities/staff.entity';

@EntityRepository(StaffEntity)
export default class StaffsRepository extends BaseRepository<StaffEntity> {}
