import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalController } from './medical.controller';
import { MedicalService } from './medical.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [MedicalController],
  providers: [MedicalService]
})
export class MedicalModule {}
