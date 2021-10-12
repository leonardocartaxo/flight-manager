import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Passenger } from '../passengers/passenger';
import * as mongoose from 'mongoose';
import { BaseModel } from '../libs/base.model';

@Schema({ timestamps: true })
export class Flight extends BaseModel {
  @Prop()
  takeOffDate: Date;

  @Prop()
  landingDate: Date;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Passenger' }] })
  passengers: Passenger[];

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Passenger' } })
  passenger: Passenger;
}

export type FlightDocument = Flight & Document;

export const FlightSchema = SchemaFactory.createForClass(Flight);
