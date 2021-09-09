import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cbptbainmt } from '../entities/Cbptbainmt';
import { Crkcddgcmt } from '../entities/Crkcddgcmt';
import { Crprsccdmt } from '../entities/Crprsccdmt';
import { MedicalController } from './medical.controller';
import { MedicalService } from './medical.service';

@Module({
  imports: [TypeOrmModule.forFeature([Crprsccdmt, Cbptbainmt, Crkcddgcmt])],
  controllers: [MedicalController],
  providers: [MedicalService]
})
export class MedicalModule {}
