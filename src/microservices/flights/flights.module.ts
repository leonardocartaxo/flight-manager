import { Module } from '@nestjs/common';
import { FlightsService } from './services/flights.service';
import { FlightsController } from './controllers/flights.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import FlightsRepository from './repositories/flights.repository';
import FlightPassengersRepository from './repositories/flight-passengers.repository';
import { FlightPassengersService } from './services/flight-passengers.service';
import FlightExpensesRepository from './repositories/flight-expenses.repository';
import CrewsRepository from './repositories/crew.repository';
import CrewAttendantRepository from './repositories/crew-attendants.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FlightsRepository,
      FlightPassengersRepository,
      FlightExpensesRepository,
      CrewsRepository,
      CrewAttendantRepository,
    ]),
  ],
  providers: [FlightsService, FlightPassengersService],
  controllers: [FlightsController],
})
export class FlightsModule {}
