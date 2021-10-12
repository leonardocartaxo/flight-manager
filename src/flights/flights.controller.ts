import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FlightsService } from './flights.service';
import { FlightDto, FlightDtoCreate } from './flight-dtos';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post('')
  @ApiOperation({ summary: 'create flight' })
  @ApiResponse({ status: 201, type: FlightDto })
  async create(@Body() flightDtoCreate: FlightDtoCreate): Promise<FlightDto> {
    try {
      return await this.flightsService.create(flightDtoCreate);
    } catch (e) {
      console.error(e);
    }
  }

  @Get('')
  @ApiOperation({ summary: 'Get all flights' })
  async findAll(): Promise<FlightDto[]> {
    return await this.flightsService.getAll();
  }
}
