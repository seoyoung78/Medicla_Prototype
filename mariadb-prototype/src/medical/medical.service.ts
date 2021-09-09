import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cbptbainmt } from '../entities/Cbptbainmt';
import { Crkcddgcmt } from '../entities/Crkcddgcmt';
import { Crprsccdmt } from '../entities/Crprsccdmt';

@Injectable()
export class MedicalService {
  constructor(
    @InjectRepository(Crprsccdmt) private CrprsccdmRepository: Repository<Crprsccdmt>,
    @InjectRepository(Cbptbainmt) private CbptbainmtRepository: Repository<Cbptbainmt>,
    @InjectRepository(Crkcddgcmt) private CrkcddgcmtRepository: Repository<Crkcddgcmt>,
  ) {}

  // 처방목록 불러오기
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

  // 환자 목록 불러오기
  async getPatientsList(keyword) : Promise<any[]> {
    const getPatientsList = await this.CbptbainmtRepository.createQueryBuilder('CBPTBAINMT')
      .select(`*`,)
      .where(`CBPTBAINMT.ptNm like :name`, {name: '%' + keyword + '%'})
      .andWhere(`CBPTBAINMT.delYn = 'N'`)
      .getRawMany();

    return getPatientsList;
  }

  // 진단 목록 불러오기
  async getDList() : Promise<any[]> {
    const getDList = await this.CrkcddgcmtRepository.createQueryBuilder('CRKCDDGCMT')
      .select(`*`,)
      .limit(20)
      .getRawMany();

    return getDList;
  }
}
