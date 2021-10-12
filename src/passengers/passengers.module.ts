import { Module } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Passenger, PassengerSchema } from './passenger';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Passenger.name, schema: PassengerSchema },
    ]),
  ],
  providers: [PassengersService],
  controllers: [PassengersController],
})
export class PassengersModule {}
