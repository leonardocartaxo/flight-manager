import { Module } from '@nestjs/common';
import { PersonsService } from './services/persons.service';
import { PilotsService } from './services/pilots.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import PilotsRepository from './repositories/pilots.repository';
import { StaffsService } from './services/staffs.service';
import { StaffsController } from './controllers/staffs.controller';
import PersonsRepository from './repositories/persons.repository';
import StaffsRepository from './repositories/staffs.repository';
import CustomersRepository from './repositories/customers.repository';
import { CustomersService } from './services/customers.service';
import { CustomersController } from './controllers/customers.controller';
import { PilotsController } from './controllers/pilots.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomersRepository,
      PilotsRepository,
      PersonsRepository,
      StaffsRepository,
    ]),
  ],
  providers: [PersonsService, CustomersService, PilotsService, StaffsService],
  controllers: [CustomersController, StaffsController, PilotsController],
})
export class PersonsModule {}
