import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebVitalsModule } from './web-vitals/web-vitals.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    WebVitalsModule,
    MongooseModule.forRoot('mongodb://localhost/web-vitals'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
