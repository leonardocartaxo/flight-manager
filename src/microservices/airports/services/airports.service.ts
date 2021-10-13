import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../libs/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { AirportEntity } from '../entities/airport.entity';
import {
  AirportDto,
  AirportDtoCreate,
  AirportDtoUpdate,
  toAirportDto,
} from '../dtos/airports.dtos';
import { AirportsRepository } from '../repositories/airports.repository';

@Injectable()
export class AirportsService extends BaseService<
  AirportEntity,
  AirportDto,
  AirportDtoCreate,
  AirportDtoUpdate
> {
  constructor(
    @InjectRepository(AirportsRepository)
    private readonly airportsRepository: AirportsRepository,
  ) {
    super(airportsRepository, toAirportDto, []);
  }
}
