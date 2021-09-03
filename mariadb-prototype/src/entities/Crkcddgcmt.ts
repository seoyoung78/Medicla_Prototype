import { Column, Entity } from "typeorm";

@Entity("crkcddgcmt", { schema: "cli" })
export class Crkcddgcmt {
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
    name: "dgns_cd",
    comment: "진단코드",
    length: 10,
  })
  dgnsCd: string;

  @Column("varchar", {
    name: "dgns_enm",
    nullable: true,
    comment: "진단영문명",
    length: 300,
  })
  dgnsEnm: string | null;

  @Column("varchar", {
    name: "dgns_hnm",
    nullable: true,
    comment: "진단한글명",
    length: 300,
  })
  dgnsHnm: string | null;

  @Column("varchar", {
    name: "dgns_cd_dvsn",
    nullable: true,
    comment: "진단코드구분",
    length: 1,
  })
  dgnsCdDvsn: string | null;

  @Column("varchar", { name: "lcls_cd", comment: "대분류코드", length: 5 })
  lclsCd: string;

  @Column("varchar", { name: "mcls_cd", comment: "중분류코드", length: 3 })
  mclsCd: string;

  @Column("varchar", { name: "scls_cd", comment: "소분류코드", length: 4 })
  sclsCd: string;

  @Column("varchar", {
    name: "cmds_grad",
    nullable: true,
    comment: "전염병등급",
    length: 1,
  })
  cmdsGrad: string | null;

  @Column("varchar", {
    name: "icd10_cd",
    nullable: true,
    comment: "ICD10코드",
    length: 10,
  })
  icd10Cd: string | null;

  @Column("varchar", {
    name: "dgns_cd_vrsn",
    nullable: true,
    comment: "진단코드버전",
    length: 3,
  })
  dgnsCdVrsn: string | null;

  @Column("varchar", {
    name: "mdcr_use_yn",
    nullable: true,
    comment: "진료사용여부",
    length: 1,
  })
  mdcrUseYn: string | null;

  @Column("varchar", {
    name: "icd_cd_yn",
    nullable: true,
    comment: "ICD코드여부",
    length: 1,
  })
  icdCdYn: string | null;

  @Column("varchar", {
    name: "del_dt",
    nullable: true,
    comment: "삭제일시",
    length: 50,
  })
  delDt: string | null;

  @Column("varchar", {
    name: "spmn_matr",
    nullable: true,
    comment: "특기사항",
    length: 2000,
  })
  spmnMatr: string | null;

  @Column("varchar", {
    name: "dnfr_chck_yn",
    nullable: true,
    comment: "치식체크여부",
    length: 1,
  })
  dnfrChckYn: string | null;

  @Column("varchar", {
    name: "grp_cd",
    nullable: true,
    comment: "그룹코드",
    length: 20,
  })
  grpCd: string | null;

  @Column("varchar", {
    name: "grp_nm",
    nullable: true,
    comment: "그룹명",
    length: 300,
  })
  grpNm: string | null;

  @Column("varchar", {
    name: "chrn_dsse_yn",
    nullable: true,
    comment: "만성질환여부",
    length: 1,
  })
  chrnDsseYn: string | null;
}
