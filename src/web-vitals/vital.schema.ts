import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type VitalDocument = Vital & Document;

@Schema()
export class Vital {
  @ApiProperty({ type: String })
  _id: string | ObjectId;

  @ApiProperty({ type: Number })
  @Prop()
  timestamp: number;

  @ApiProperty({ type: String })
  @Prop()
  app: string;

  @ApiProperty({ type: String })
  @Prop()
  parameter: string;

  @ApiProperty({ type: Number })
  @Prop()
  value: number;

  @ApiProperty({ type: String })
  @Prop()
  ip: string;

  @ApiProperty({ type: String })
  @Prop()
  browser: string;
}

export const VitalSchema = SchemaFactory.createForClass(Vital);
