import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Czcomcodmt } from '../entities/Czcomcodmt';

@Injectable()
export class MedicalService {
  constructor(
    // @InjectRepository(Czcomcodmt) private CzcRepository: Repository<Czcomcodmt>,
  ) {}

  // async getAll(): Promise<any[]> {
  //   const getAllList = await this.CzcRepository.createQueryBuilder('CZCOMCODMT')
  //     .select(
  //       `CZCOMCODMT.frst_rgst_usid,
  //       CZCOMCODMT.frst_rgdt,
  //       CZCOMCODMT.last_updt_usid,
  //       CZCOMCODMT.last_uddt`,
  //     )
  //     .from(Czcomcodmt, 'CZCOMCODMT')
  //     .where(`CZCOMCODMT.cmcd_clsf_id='AU01'`)
  //     .getRawMany();
    
  //   console.log(getAllList);

  //   return getAllList;
  // }
}
