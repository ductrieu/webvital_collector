import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import { WebVitalsService } from './web-vitals.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WebVitalDto } from './dto/web-vital.dto';

@ApiTags('Web-Vitals')
@Controller('web-vitals')
export class WebVitalsController {
  constructor(private readonly webVitalsService: WebVitalsService) {}
  @ApiOperation({ summary: 'Create Organization Group' })
  @Post()
  async create(@Body() createWebVitalDto: WebVitalDto, @Req() request) {
    return await this.webVitalsService.create(createWebVitalDto, request);
  }

  @ApiOperation({ summary: 'count number record' })
  @Get('/count')
  async count() {
    return await this.webVitalsService.count();
  }

  @ApiOperation({ summary: 'count number record' })
  @Get('delAll')
  async delete() {
    return await this.webVitalsService.deleteAll();
  }
}
