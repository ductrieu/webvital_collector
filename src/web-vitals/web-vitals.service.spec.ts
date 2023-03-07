import { Test, TestingModule } from '@nestjs/testing';
import { WebVitalsService } from './web-vitals.service';

describe('WebVitalsService', () => {
  let service: WebVitalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebVitalsService],
    }).compile();

    service = module.get<WebVitalsService>(WebVitalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
