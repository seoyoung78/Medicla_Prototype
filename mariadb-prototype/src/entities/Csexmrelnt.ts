import { Column, Entity } from "typeorm";

@Entity("csexmrelnt", { schema: "cli" })
export class Csexmrelnt {
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
    name: "pid",
    comment: "환자등록번호",
    length: 8,
  })
  pid: string;

  @Column("varchar", {
    primary: true,
    name: "prsc_date",
    comment: "처방일자",
    length: 50,
  })
  prscDate: string;

  @Column("int", { primary: true, name: "prsc_sqno", comment: "처방순번" })
  prscSqno: number;

  @Column("varchar", { name: "prsc_cd", comment: "처방코드", length: 10 })
  prscCd: string;

  @Column("varchar", { name: "exmn_cd", comment: "검사코드", length: 10 })
  exmnCd: string;

  @Column("varchar", {
    name: "slip_cd",
    nullable: true,
    comment: "SLIP코드",
    length: 6,
  })
  slipCd: string | null;

  @Column("varchar", {
    name: "exmn_rslt1",
    nullable: true,
    comment: "검사결과",
    length: 100,
  })
  exmnRslt1: string | null;

  @Column("varchar", {
    name: "exmn_rslt2",
    nullable: true,
    comment: "검사결과",
    length: 3000,
  })
  exmnRslt2: string | null;

  @Column("varchar", {
    name: "rslt_type",
    nullable: true,
    comment: "결과 type",
    length: 1,
  })
  rsltType: string | null;

  @Column("varchar", {
    name: "rslt_unit",
    nullable: true,
    comment: "결과단위",
    length: 10,
  })
  rsltUnit: string | null;

  @Column("varchar", {
    name: "nots_low",
    nullable: true,
    comment: "참고사항",
    length: 20,
  })
  notsLow: string | null;

  @Column("varchar", {
    name: "nots_high",
    nullable: true,
    comment: "참고사항",
    length: 20,
  })
  notsHigh: string | null;

  @Column("varchar", {
    name: "pclr_matr",
    nullable: true,
    comment: "특이사항",
    length: 300,
  })
  pclrMatr: string | null;

  @Column("varchar", {
    name: "prsc_prgr_stat_cd",
    nullable: true,
    comment: "처방진행상태코드 M(실시), N(보고)",
    length: 1,
  })
  prscPrgrStatCd: string | null;

  @Column("varchar", {
    name: "cndt_prsn_id",
    nullable: true,
    comment: "실시자ID",
    length: 10,
  })
  cndtPrsnId: string | null;

  @Column("varchar", {
    name: "cndt_dt",
    nullable: true,
    comment: "실시일시",
    length: 50,
  })
  cndtDt: string | null;

  @Column("varchar", {
    name: "updt_prsn_id",
    nullable: true,
    comment: "수정자 ID",
    length: 13,
  })
  updtPrsnId: string | null;

  @Column("varchar", {
    name: "updt_prsn_ip",
    nullable: true,
    comment: "수정자 IP",
    length: 15,
  })
  updtPrsnIp: string | null;

  @Column("varchar", {
    name: "uddt",
    nullable: true,
    comment: "수정일시",
    length: 50,
  })
  uddt: string | null;

  @Column("varchar", {
    name: "prsc_clsf_cd",
    nullable: true,
    comment: "TRIAL",
    length: 2,
  })
  prscClsfCd: string | null;

  @Column("varchar", {
    name: "mddp_cd",
    nullable: true,
    comment: "TRIAL",
    length: 6,
  })
  mddpCd: string | null;

  @Column("varchar", {
    name: "mdcr_dr_id",
    nullable: true,
    comment: "TRIAL",
    length: 20,
  })
  mdcrDrId: string | null;

  @Column("varchar", {
    name: "prsc_dr_id",
    nullable: true,
    comment: "TRIAL",
    length: 20,
  })
  prscDrId: string | null;

  @Column("varchar", {
    name: "spcm_cd_1",
    nullable: true,
    comment: "TRIAL",
    length: 5,
  })
  spcmCd_1: string | null;

  @Column("varchar", {
    name: "hope_exrm_cd",
    nullable: true,
    comment: "TRIAL",
    length: 5,
  })
  hopeExrmCd: string | null;

  @Column("varchar", {
    name: "exmn_date",
    nullable: true,
    comment: "TRIAL",
    length: 8,
  })
  exmnDate: string | null;

  @Column("int", { name: "rcpn_sqno", comment: "접수일련번호" })
  rcpnSqno: number;
}
