import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseController } from '../../../libs/base-controller';
import { StaffDto, StaffDtoCreate, StaffDtoUpdate } from '../dtos/staff.dtos';
import { StaffEntity } from '../entities/staff.entity';
import { StaffsService } from '../services/staffs.service';

@Controller('staffs')
@ApiTags('staffs')
export class StaffsController extends BaseController<
  StaffEntity,
  StaffDto,
  StaffDtoCreate,
  StaffDtoUpdate
> {
  constructor(private readonly staffsService: StaffsService) {
    super(staffsService);
  }

  @Post('')
  @ApiOperation({ summary: 'create Staff' })
  @ApiResponse({ status: 201, type: StaffDto })
  async create(@Body() createDto: StaffDtoCreate): Promise<StaffDto> {
    return await this.staffsService.create({
      person: createDto?.person,
    });
  }

  @Get('')
  @ApiOperation({ summary: 'get all staffs' })
  async getAll(): Promise<StaffDto[]> {
    return super.getAll();
  }
}
