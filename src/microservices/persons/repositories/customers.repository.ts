import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { CustomerEntity } from '../entities/customer.entity';

@EntityRepository(CustomerEntity)
export default class CustomersRepository extends BaseRepository<CustomerEntity> {}
