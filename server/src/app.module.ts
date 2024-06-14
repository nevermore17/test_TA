import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { DocModule } from './doc/doc.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      autoIndex: true
    }),
    DocModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
