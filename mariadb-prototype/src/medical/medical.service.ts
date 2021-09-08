import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crprsccdmt } from '../entities/Crprsccdmt';

@Injectable()
export class MedicalService {
  constructor(
    @InjectRepository(Crprsccdmt) private CrprsccdmRepository: Repository<Crprsccdmt>,
  ) {}

  async getAll(): Promise<any[]> {
    const getAllList = await this.CrprsccdmRepository.createQueryBuilder('CRPRSCCDMT')
      .select(`
        CRPRSCCDMT.prscCd,
        CRPRSCCDMT.prscNm,
        CRPRSCCDMT.prscClsfCd,
        CRPRSCCDMT.iotmCd,
        CRPRSCCDMT.ctnt,
        CRPRSCCDMT.insnTycd,
        CRPRSCCDMT.inpyDvcd,
        CRPRSCCDMT.hsotPrscYn
      `,)
      .where(`CRPRSCCDMT.prscClsfCd='B4'`)
      .getRawMany();

    return getAllList;
  }
}
