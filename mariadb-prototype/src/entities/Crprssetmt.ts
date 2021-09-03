import { Column, Entity } from "typeorm";

@Entity("crprssetmt", { schema: "cli" })
export class Crprssetmt {
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

  @Column("int", {
    primary: true,
    name: "prsc_set_clsf_sqno",
    comment: "처방SET분류일련번호",
  })
  prscSetClsfSqno: number;

  @Column("varchar", {
    name: "prsc_set_dvcd",
    nullable: true,
    comment: "처방SET구분코드",
    length: 1,
  })
  prscSetDvcd: string | null;

  @Column("varchar", {
    name: "prsc_set_clsf_nm",
    nullable: true,
    comment: "처방SET분류명",
    length: 300,
  })
  prscSetClsfNm: string | null;

  @Column("varchar", {
    name: "prsc_set_usid",
    nullable: true,
    comment: "처방SET사용자ID",
    length: 20,
  })
  prscSetUsid: string | null;

  @Column("varchar", {
    name: "mddp_cd",
    nullable: true,
    comment: "진료과코드",
    length: 6,
  })
  mddpCd: string | null;

  @Column("int", {
    name: "prsc_set_uprn_cd",
    nullable: true,
    comment: "처방SET상위코드",
  })
  prscSetUprnCd: number | null;

  @Column("int", {
    name: "prsc_set_dspl_seq",
    nullable: true,
    comment: "처방SET나열순서",
  })
  prscSetDsplSeq: number | null;

  @Column("varchar", {
    name: "lwrn_yn",
    nullable: true,
    comment: "하위분류존재여부",
    length: 1,
  })
  lwrnYn: string | null;

  @Column("varchar", {
    name: "dgns_cd",
    nullable: true,
    comment: "진단코드",
    length: 10,
  })
  dgnsCd: string | null;

  @Column("varchar", {
    name: "clnc_dgns_nm",
    nullable: true,
    comment: "임상진단명",
    length: 300,
  })
  clncDgnsNm: string | null;

  @Column("varchar", {
    name: "site_dvcd",
    nullable: true,
    comment: "부위구분코드",
    length: 20,
  })
  siteDvcd: string | null;

  @Column("varchar", {
    name: "site_set_use_yn",
    nullable: true,
    comment: "부위SET사용여부",
    length: 1,
  })
  siteSetUseYn: string | null;

  @Column("varchar", {
    name: "rcmn_amag_cnts_1",
    nullable: true,
    comment: "추천항균제내용1",
    length: 900,
  })
  rcmnAmagCnts_1: string | null;

  @Column("varchar", {
    name: "rcmn_amag_cnts_2",
    nullable: true,
    comment: "추천항균제내용2",
    length: 900,
  })
  rcmnAmagCnts_2: string | null;

  @Column("varchar", {
    name: "prsc_set_nots",
    nullable: true,
    comment: "처방SET참고사항",
    length: 4000,
  })
  prscSetNots: string | null;

  @Column("char", {
    name: "trial057",
    nullable: true,
    comment: "TRIAL",
    length: 1,
  })
  trial057: string | null;
}
