import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { PersonEntity } from '../entities/person.entity';

@EntityRepository(PersonEntity)
export default class PersonsRepository extends BaseRepository<PersonEntity> {}
