import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../libs/base.model';

@Schema({ timestamps: true })
export class Passenger extends BaseModel {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  document: string;
}

export type PassengerDocument = Passenger & Document;

export const PassengerSchema = SchemaFactory.createForClass(Passenger);
