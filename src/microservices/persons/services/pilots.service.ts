import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../libs/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { PilotEntity } from '../entities/pilot.entity';
import {
  PilotDto,
  PilotDtoCreate,
  PilotDtoUpdate,
  toPilotDto,
} from '../dtos/pilot.dtos';
import PilotsRepository from '../repositories/pilots.repository';
import StaffsRepository from '../repositories/staffs.repository';

@Injectable()
export class PilotsService extends BaseService<
  PilotEntity,
  PilotDto,
  PilotDtoCreate,
  PilotDtoUpdate
> {
  constructor(
    @InjectRepository(PilotsRepository)
    private readonly pilotsRepository: PilotsRepository,
    @InjectRepository(StaffsRepository)
    private readonly staffsRepository: StaffsRepository,
  ) {
    super(pilotsRepository, toPilotDto, ['staff', 'staff.person']);
  }
}
