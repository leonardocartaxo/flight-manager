import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../libs/base-controller';
import { AirportEntity } from '../entities/airport.entity';
import { AirportsService } from '../services/airports.service';
import {
  AirportDto,
  AirportDtoCreate,
  AirportDtoUpdate,
} from '../dtos/airports.dtos';

@Controller('airports')
@ApiTags('airports')
export class AirportsController extends BaseController<
  AirportEntity,
  AirportDto,
  AirportDtoCreate,
  AirportDtoUpdate
> {
  constructor(private readonly airplanesService: AirportsService) {
    super(airplanesService);
  }

  @Post('')
  @ApiOperation({ summary: 'create airport' })
  async create(@Body() createDto: AirportDtoCreate): Promise<AirportDto> {
    return await super.create(createDto);
  }

  @Get('')
  @ApiOperation({ summary: 'get all airports' })
  async getAll(): Promise<AirportDto[]> {
    return await super.getAll();
  }
}
