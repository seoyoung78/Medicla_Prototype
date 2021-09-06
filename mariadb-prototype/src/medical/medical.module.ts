import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crprsccdmt } from '../entities/Crprsccdmt';
import { MedicalController } from './medical.controller';
import { MedicalService } from './medical.service';

@Module({
  imports: [TypeOrmModule.forFeature([Crprsccdmt])],
  controllers: [MedicalController],
  providers: [MedicalService]
})
export class MedicalModule {}
