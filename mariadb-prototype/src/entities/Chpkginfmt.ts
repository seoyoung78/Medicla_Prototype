import { Column, Entity } from "typeorm";

@Entity("chpkginfmt", { schema: "cli" })
export class Chpkginfmt {
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
    name: "pkg_cd",
    comment: "패키지코드",
    length: 10,
  })
  pkgCd: string;

  @Column("varchar", { name: "pkg_nm", comment: "패키지명", length: 60 })
  pkgNm: string;

  @Column("varchar", { name: "mdex_dvcd", comment: "검진구분코드", length: 2 })
  mdexDvcd: string;

  @Column("int", { name: "pkg_amt", nullable: true, comment: "패키지금액" })
  pkgAmt: number | null;

  @Column("varchar", {
    name: "pkg_apdy",
    nullable: true,
    comment: "패키지적용일자",
    length: 8,
  })
  pkgApdy: string | null;

  @Column("varchar", {
    name: "pkg_endy",
    nullable: true,
    comment: "패키지종료일자",
    length: 8,
  })
  pkgEndy: string | null;

  @Column("varchar", {
    name: "suga_cd",
    nullable: true,
    comment: "수가코드",
    length: 15,
  })
  sugaCd: string | null;

  @Column("varchar", {
    name: "adtl_exmn_item_yn",
    nullable: true,
    comment: "추가검사항목여부",
    length: 1,
  })
  adtlExmnItemYn: string | null;

  @Column("varchar", {
    name: "sex_dvcd",
    nullable: true,
    comment: "남여구분코드",
    length: 1,
  })
  sexDvcd: string | null;

  @Column("varchar", {
    name: "apnt_stts_yn",
    nullable: true,
    comment: "예약현황여부",
    length: 1,
  })
  apntSttsYn: string | null;

  @Column("int", {
    name: "apnt_psbl_nopl",
    nullable: true,
    comment: "예약가능인원수",
  })
  apntPsblNopl: number | null;

  @Column("int", {
    name: "prnt_mark_seq",
    nullable: true,
    comment: "출력표시순서",
  })
  prntMarkSeq: number | null;

  @Column("varchar", {
    name: "hstk_lcls_cd",
    nullable: true,
    comment: "문진대분류코드",
    length: 2,
  })
  hstkLclsCd: string | null;
}
