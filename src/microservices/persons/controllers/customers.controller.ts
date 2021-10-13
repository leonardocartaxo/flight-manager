import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseController } from '../../../libs/base-controller';
import { CustomerEntity } from '../entities/customer.entity';
import {
  CustomerDto,
  CustomerDtoCreate,
  CustomerDtoUpdate,
} from '../dtos/customer.dtos';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
@ApiTags('customers')
export class CustomersController extends BaseController<
  CustomerEntity,
  CustomerDto,
  CustomerDtoCreate,
  CustomerDtoUpdate
> {
  constructor(private readonly passengersService: CustomersService) {
    super(passengersService);
  }

  @Post('')
  @ApiOperation({ summary: 'create customer' })
  async create(@Body() createDto: CustomerDtoCreate): Promise<CustomerDto> {
    return await this.passengersService.create({
      person: createDto.person,
    });
  }

  @Get('')
  @ApiOperation({ summary: 'get all customer' })
  async getAll(): Promise<CustomerDto[]> {
    return super.getAll();
  }
}
