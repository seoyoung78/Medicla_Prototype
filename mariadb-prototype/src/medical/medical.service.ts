import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cbptbainmt } from '../entities/Cbptbainmt';
import { Crprsccdmt } from '../entities/Crprsccdmt';

@Injectable()
export class MedicalService {
  constructor(
    @InjectRepository(Crprsccdmt) private CrprsccdmRepository: Repository<Crprsccdmt>,
    @InjectRepository(Cbptbainmt) private CbptbainmtRepository: Repository<Cbptbainmt>,
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

  async getPatientsList(keyword) : Promise<any[]> {
    const getPatientsList = await this.CbptbainmtRepository.createQueryBuilder('CBPTBAINMT')
      .select(`*`,)
      .where(`CBPTBAINMT.ptNm like :name`, {name: '%' + keyword + '%'})
      .andWhere(`CBPTBAINMT.delYn = 'N'`)
      .getRawMany();

    return getPatientsList;
  }
}
