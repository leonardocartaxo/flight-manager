import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseController } from '../../../libs/base-controller';
import { AirplaneEntity } from '../entities/airplane.entity';
import {
  AirplaneDto,
  AirplaneDtoCreate,
  AirplaneDtoUpdate,
} from '../dtos/airplanes.dtos';
import { AirplanesService } from '../services/airplanes.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('airplanes')
@ApiTags('airplanes')
export class AirplanesController extends BaseController<
  AirplaneEntity,
  AirplaneDto,
  AirplaneDtoCreate,
  AirplaneDtoUpdate
> {
  constructor(private readonly airplanesService: AirplanesService) {
    super(airplanesService);
  }

  @Post('')
  @ApiOperation({ summary: 'create airplane' })
  async create(@Body() createDto: AirplaneDtoCreate): Promise<AirplaneDto> {
    return await super.create(createDto);
  }

  @Get('')
  @ApiOperation({ summary: 'get all airplanes' })
  async getAll(): Promise<AirplaneDto[]> {
    return await super.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get an airplane' })
  async get(id: string): Promise<AirplaneDto> {
    return await super.get(id);
  }
}
