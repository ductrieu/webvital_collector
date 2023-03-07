import { Module } from '@nestjs/common';
import { WebVitalsService } from './web-vitals.service';
import { WebVitalsController } from './web-vitals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vital, VitalSchema } from './vital.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Vital.name,
        schema: VitalSchema,
      },
    ]),
  ],
  controllers: [WebVitalsController],
  providers: [WebVitalsService],
  exports: [WebVitalsService],
})
export class WebVitalsModule {}
