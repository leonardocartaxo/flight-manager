import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../libs/base.service';
import { AirplaneEntity } from '../entities/airplane.entity';
import {
  AirplaneDto,
  AirplaneDtoCreate,
  AirplaneDtoUpdate,
  toAirplaneDto,
} from '../dtos/airplanes.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { AirplanesRepository } from '../repositories/airplanes.repository';

@Injectable()
export class AirplanesService extends BaseService<
  AirplaneEntity,
  AirplaneDto,
  AirplaneDtoCreate,
  AirplaneDtoUpdate
> {
  constructor(
    @InjectRepository(AirplanesRepository)
    private readonly airplanesRepository: AirplanesRepository,
  ) {
    super(airplanesRepository, toAirplaneDto, []);
  }
}
