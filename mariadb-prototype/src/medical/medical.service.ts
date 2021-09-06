import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crprsccdmt } from '../entities/Crprsccdmt';

@Injectable()
export class MedicalService {
  constructor(
    @InjectRepository(Crprsccdmt) private CrprsccdmRepository: Repository<Crprsccdmt>,
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
