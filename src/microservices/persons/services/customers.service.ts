import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../libs/base.service';
import { CustomerEntity } from '../entities/customer.entity';
import CustomersRepository from '../repositories/customers.repository';
import {
  CustomerDto,
  CustomerDtoCreate,
  CustomerDtoUpdate,
  toCustomerDto,
} from '../dtos/customer.dtos';

@Injectable()
export class CustomersService extends BaseService<
  CustomerEntity,
  CustomerDto,
  CustomerDtoCreate,
  CustomerDtoUpdate
> {
  constructor(
    @InjectRepository(CustomersRepository)
    private readonly passengersRepository: CustomersRepository,
  ) {
    super(passengersRepository, toCustomerDto, ['person']);
  }
}
