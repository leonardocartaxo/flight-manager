import { Module } from '@nestjs/common';
import { AirplanesController } from './controllers/airplanes.controller';
import { AirplanesService } from './services/airplanes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirplanesRepository } from './repositories/airplanes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AirplanesRepository])],
  controllers: [AirplanesController],
  providers: [AirplanesService],
})
export class AirplanesModule {}
