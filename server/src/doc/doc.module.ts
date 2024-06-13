import { Module } from '@nestjs/common';
import { DocController } from './doc.controller';
import { DocService } from './doc.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Doc, DocSchema } from './schemas/doc.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Doc.name, schema: DocSchema }])],
  controllers: [DocController],
  providers: [DocService]
})
export class DocModule {}
