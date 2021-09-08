import { Controller, Get } from '@nestjs/common';
import { MedicalService } from './medical.service';

@Controller('medical')
export class MedicalController {
  constructor(private medicalService: MedicalService) {}

  @Get()
  async Get(): Promise<any[]> {
    return this.medicalService.getAll();
  }
}
