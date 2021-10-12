import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { Flight, FlightSchema } from './flight';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Flight.name, schema: FlightSchema },
    ]),
  ],
  providers: [FlightsService],
  controllers: [FlightsController],
})
export class FlightsModule {}
