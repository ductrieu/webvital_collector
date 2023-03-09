import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Vital, VitalDocument } from './vital.schema';
import { WebVitalDto } from './dto/web-vital.dto';

@Injectable()
export class WebVitalsService {
  constructor(
    @InjectModel(Vital.name)
    private VitalsModel: Model<VitalDocument>,
  ) {}
  async create(createWebVitalDto: WebVitalDto, req: any) {
    const newVital = await this.VitalsModel.create({
      ip: req.socket.remoteAddress,
      browser: req.headers['sec-ch-ua'],
      ...createWebVitalDto,
    });
    console.log(newVital);
    return newVital;
  }
}
