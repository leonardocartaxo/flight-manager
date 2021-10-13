import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportsController } from './controllers/airports.controller';
import { AirportsService } from './services/airports.service';
import { AirportsRepository } from './repositories/airports.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AirportsRepository])],
  controllers: [AirportsController],
  providers: [AirportsService],
})
export class AirportsModule {}
