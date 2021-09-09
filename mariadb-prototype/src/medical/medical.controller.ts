import { Controller, Get, Param } from '@nestjs/common';
import { MedicalService } from './medical.service';

@Controller('medical')
export class MedicalController {
  constructor(private medicalService: MedicalService) {}

  @Get()
  async Get(): Promise<any[]> {
    return this.medicalService.getAll();
  }

  @Get(':keyword')
  async GetP(@Param('keyword') keyword: string): Promise<any[]> {
    return this.medicalService.getPatientsList(keyword);
  }
}
