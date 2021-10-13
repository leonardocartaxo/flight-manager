import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseController } from '../../../libs/base-controller';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PilotEntity } from '../entities/pilot.entity';
import { PilotDto, PilotDtoCreate, PilotDtoUpdate } from '../dtos/pilot.dtos';
import { PilotsService } from '../services/pilots.service';

@Controller('pilots')
@ApiTags('pilots')
export class PilotsController extends BaseController<
  PilotEntity,
  PilotDto,
  PilotDtoCreate,
  PilotDtoUpdate
> {
  constructor(private readonly pilotsService: PilotsService) {
    super(pilotsService);
  }

  @Post('')
  @ApiOperation({ summary: 'create Pilot' })
  async create(@Body() createDto: PilotDtoCreate): Promise<PilotDto> {
    return await this.pilotsService.create({
      staff: {
        person: createDto?.staff?.person,
      },
    });
  }

  @Get('')
  @ApiOperation({ summary: 'get all pilots' })
  async getAll(): Promise<PilotDto[]> {
    return super.getAll();
  }
}
