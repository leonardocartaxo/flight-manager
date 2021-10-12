import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BaseController } from '../libs/base-controller';
import { Passenger } from './passenger';
import { PassengerDto, PassengerDtoCreate } from './passenger-dtos';
import { PassengersService } from './passengers.service';

@Controller('passengers')
export class PassengersController extends BaseController<
  Passenger,
  PassengerDto,
  PassengerDtoCreate,
  PassengerDtoCreate
> {
  constructor(private readonly passengersService: PassengersService) {
    super(passengersService);
  }

  @Post('')
  @ApiOperation({ summary: 'create passenger' })
  @ApiResponse({ status: 201, type: PassengerDto })
  async create(@Body() createDto: PassengerDtoCreate): Promise<PassengerDto> {
    return super.create(createDto);
  }

  @Get('')
  @ApiResponse({ status: 201, type: PassengerDto, isArray: true })
  async getAll(): Promise<PassengerDto[]> {
    return super.getAll();
  }
}
