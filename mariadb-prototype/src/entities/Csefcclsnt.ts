import { Column, Entity } from "typeorm";

@Entity("csefcclsnt", { schema: "cli" })
export class Csefcclsnt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
  hsptCd: string;

  @Column("varchar", {
    name: "frst_rgst_usid",
    comment: "최초등록사용자ID",
    length: 20,
  })
  frstRgstUsid: string;

  @Column("datetime", {
    name: "frst_rgdt",
    comment: "최초등록일시",
    default: () => "'2000-00-06 00:00:00'",
  })
  frstRgdt: Date;

  @Column("varchar", {
    name: "last_updt_usid",
    comment: "최종수정사용자ID",
    length: 20,
  })
  lastUpdtUsid: string;

  @Column("datetime", {
    name: "last_uddt",
    comment: "최종수정일시",
    default: () => "'2000-00-06 00:00:00'",
  })
  lastUddt: Date;

  @Column("varchar", {
    primary: true,
    name: "efcc_clsf_cd_1",
    comment: "효능분류코드1",
    length: 3,
  })
  efccClsfCd_1: string;

  @Column("varchar", {
    primary: true,
    name: "efcc_clsf_cd_2",
    comment: "효능분류코드2",
    length: 3,
  })
  efccClsfCd_2: string;

  @Column("varchar", {
    primary: true,
    name: "efcc_clsf_cd_3",
    comment: "효능분류코드3",
    length: 3,
  })
  efccClsfCd_3: string;

  @Column("varchar", {
    name: "grp_clsf_dvsn",
    nullable: true,
    comment: "그룹분류구분",
    length: 1,
  })
  grpClsfDvsn: string | null;

  @Column("varchar", {
    name: "clsf_nm",
    nullable: true,
    comment: "분류명",
    length: 70,
  })
  clsfNm: string | null;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;
}
