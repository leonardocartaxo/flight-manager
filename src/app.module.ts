import { Module } from '@nestjs/common';
import { FlightsModule } from './flights/flights.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassengersModule } from './passengers/passengers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/flight-manager'),
    FlightsModule,
    PassengersModule,
  ],
})
export class AppModule {}
