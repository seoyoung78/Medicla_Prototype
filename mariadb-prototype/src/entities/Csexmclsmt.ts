import { Column, Entity } from "typeorm";

@Entity("csexmclsmt", { schema: "cli" })
export class Csexmclsmt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
  hsptCd: string;

  @Column("varchar", {
    name: "frst_rgst_usid",
    comment: "최초등록사용자ID",
    length: 20,
  })
  frstRgstUsid: string;

  @Column("datetime", { name: "frst_rgdt", comment: "최초등록일시" })
  frstRgdt: Date;

  @Column("varchar", {
    name: "last_updt_usid",
    comment: "최종수정사용자ID",
    length: 20,
  })
  lastUpdtUsid: string;

  @Column("datetime", { name: "last_uddt", comment: "최종수정일시" })
  lastUddt: Date;

  @Column("varchar", {
    primary: true,
    name: "dgns_exmn_exmp_dvcd",
    comment: "진단검사예문구분코드",
    length: 5,
  })
  dgnsExmnExmpDvcd: string;

  @Column("varchar", {
    primary: true,
    name: "exmp_clsf_cd",
    comment: "예문분류코드",
    length: 5,
  })
  exmpClsfCd: string;

  @Column("varchar", {
    name: "exmp_clsf_nm",
    nullable: true,
    comment: "예문분류명",
    length: 100,
  })
  exmpClsfNm: string | null;

  @Column("varchar", {
    name: "exmp_clsf_abnm",
    nullable: true,
    comment: "예문분류약어명",
    length: 100,
  })
  exmpClsfAbnm: string | null;

  @Column("int", { name: "mark_seq", nullable: true, comment: "표시순서" })
  markSeq: number | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;
}
