import {PickType} from "@nestjs/swagger";
import {Vital} from "../vital.schema";

export class WebVitalDto extends PickType(Vital,['timestamp','app', 'parameter', 'value'] as const) {}