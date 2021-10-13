import { Module } from '@nestjs/common';
import DbConfig from '../ormconfig';
import { FlightsModule } from './microservices/flights/flights.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { FlightEntity } from './microservices/flights/entities/flight.entity';
import { FlightPassengerEntity } from './microservices/flights/entities/flight-passengers.entity';
import { PersonsModule } from './microservices/persons/persons.module';
import { PersonEntity } from './microservices/persons/entities/person.entity';
import { StaffEntity } from './microservices/persons/entities/staff.entity';
import { PilotEntity } from './microservices/persons/entities/pilot.entity';
import { CustomerEntity } from './microservices/persons/entities/customer.entity';
import { AirplanesModule } from './microservices/airplanes/airplanes.module';
import { AirplaneEntity } from './microservices/airplanes/entities/airplane.entity';
import { AirportEntity } from './microservices/airports/entities/airport.entity';
import { AirportsModule } from './microservices/airports/airports.module';
import { CrewEntity } from './microservices/flights/entities/crew.entity';
import { CrewAttendantEntity } from './microservices/flights/entities/crew-attendants.entity';
import { FlightExpenseEntity } from './microservices/flights/entities/flight-expense.entity';

const dbConfig = DbConfig as any;
dbConfig.migrations = null;
dbConfig.entities = [
  FlightEntity,
  PersonEntity,
  CustomerEntity,
  FlightPassengerEntity,
  StaffEntity,
  PilotEntity,
  AirplaneEntity,
  AirportEntity,
  CrewEntity,
  CrewAttendantEntity,
  FlightExpenseEntity,
];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dbConfig),
    FlightsModule,
    PersonsModule,
    AirplanesModule,
    AirportsModule,
  ],
})
export class AppModule {}
