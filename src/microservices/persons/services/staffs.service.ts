import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { StaffEntity } from '../entities/staff.entity';
import { BaseService } from '../../../libs/base.service';
import {
  StaffDto,
  StaffDtoCreate,
  StaffDtoUpdate,
  toStaffDto,
} from '../dtos/staff.dtos';
import StaffsRepository from '../repositories/staffs.repository';

@Injectable()
export class StaffsService extends BaseService<
  StaffEntity,
  StaffDto,
  StaffDtoCreate,
  StaffDtoUpdate
> {
  constructor(
    @InjectRepository(StaffsRepository)
    private readonly staffsRepository: StaffsRepository,
  ) {
    super(staffsRepository, toStaffDto, ['person']);
  }
}
