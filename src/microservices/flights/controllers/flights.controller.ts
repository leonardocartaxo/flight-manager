import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FlightsService } from '../services/flights.service';
import {
  FlightDto,
  FlightDtoCreate,
  FlightDtoUpdate,
} from '../dtos/flight.dtos';
import { BaseController } from '../../../libs/base-controller';
import { FlightEntity } from '../entities/flight.entity';

@Controller('flights')
@ApiTags('flights')
export class FlightsController extends BaseController<
  FlightEntity,
  FlightDto,
  FlightDtoCreate,
  FlightDtoUpdate
> {
  constructor(private readonly flightsService: FlightsService) {
    super(flightsService);
  }

  @Post('')
  @ApiOperation({ summary: 'create flight' })
  async create(@Body() flightDtoCreate: FlightDtoCreate): Promise<FlightDto> {
    return await this.flightsService.create(flightDtoCreate);
  }

  @Put(':id')
  @ApiOperation({ summary: 'update flight' })
  async update(
    @Param('id') id: string,
    @Body() flightDtoUpdate: FlightDtoUpdate,
  ): Promise<FlightDto> {
    return await this.flightsService.update(id, flightDtoUpdate);
  }

  @Get('')
  @ApiOperation({ summary: 'Get all flights' })
  async findAll(): Promise<FlightDto[]> {
    return await this.flightsService.getAll();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<FlightDto> {
    return await super.get(id);
  }
}
