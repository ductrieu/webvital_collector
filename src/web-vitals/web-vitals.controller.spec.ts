import { Test, TestingModule } from '@nestjs/testing';
import { WebVitalsController } from './web-vitals.controller';
import { WebVitalsService } from './web-vitals.service';

describe('WebVitalsController', () => {
  let controller: WebVitalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebVitalsController],
      providers: [WebVitalsService],
    }).compile();

    controller = module.get<WebVitalsController>(WebVitalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
