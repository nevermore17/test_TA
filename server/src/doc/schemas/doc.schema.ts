import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DocDocument = HydratedDocument<Doc>;

@Schema()
export class Doc {
  @Prop()
  name: string;
}

export const DocSchema = SchemaFactory.createForClass(Doc);