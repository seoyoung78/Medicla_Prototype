import { Column, Entity } from "typeorm";

@Entity("crprssetdt", { schema: "cli" })
export class Crprssetdt {
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
    comment: "처방Set분류일련번호",
  })
  prscSetClsfSqno: number;

  @Column("int", {
    primary: true,
    name: "prsc_set_sqno",
    comment: "처방Set일련번호",
  })
  prscSetSqno: number;

  @Column("varchar", {
    name: "prsc_cd",
    nullable: true,
    comment: "처방코드",
    length: 12,
  })
  prscCd: string | null;

  @Column("decimal", {
    name: "prsc_dosg_1",
    nullable: true,
    comment: "처방용량1",
    precision: 10,
    scale: 3,
  })
  prscDosg_1: string | null;

  @Column("decimal", {
    name: "prsc_dosg_2",
    nullable: true,
    comment: "처방용량2",
    precision: 10,
    scale: 3,
  })
  prscDosg_2: string | null;

  @Column("decimal", {
    name: "prsc_dosg_3",
    nullable: true,
    comment: "처방용량3",
    precision: 10,
    scale: 3,
  })
  prscDosg_3: string | null;

  @Column("decimal", {
    name: "prsc_dosg_4",
    nullable: true,
    comment: "처방용량4",
    precision: 10,
    scale: 3,
  })
  prscDosg_4: string | null;

  @Column("varchar", {
    name: "mdpr_uncd",
    nullable: true,
    comment: "약품단위코드",
    length: 3,
  })
  mdprUncd: string | null;

  @Column("int", { name: "prsc_notm", nullable: true, comment: "처방횟수" })
  prscNotm: number | null;

  @Column("int", { name: "prsc_nody", nullable: true, comment: "처방일수" })
  prscNody: number | null;

  @Column("varchar", {
    name: "notm_dvcd",
    nullable: true,
    comment: "횟수구분코드",
    length: 1,
  })
  notmDvcd: string | null;

  @Column("varchar", {
    name: "iotm_cd",
    nullable: true,
    comment: "용법코드",
    length: 5,
  })
  iotmCd: string | null;

  @Column("varchar", {
    name: "optn_unit_dvcd",
    nullable: true,
    comment: "선택단위구분코드",
    length: 1,
  })
  optnUnitDvcd: string | null;

  @Column("varchar", {
    name: "hsin_hsot_dvcd",
    nullable: true,
    comment: "원내원외구분코드",
    length: 1,
  })
  hsinHsotDvcd: string | null;

  @Column("varchar", {
    name: "spfm_excp_resn_cd",
    nullable: true,
    comment: "의약분업예외사유코드",
    length: 2,
  })
  spfmExcpResnCd: string | null;

  @Column("varchar", {
    name: "ast_yn",
    nullable: true,
    comment: "AST여부",
    length: 1,
  })
  astYn: string | null;

  @Column("varchar", {
    name: "pwdr_yn",
    nullable: true,
    comment: "파우더여부",
    length: 1,
  })
  pwdrYn: string | null;

  @Column("varchar", {
    name: "mix_yn",
    nullable: true,
    comment: "Mix여부",
    length: 1,
  })
  mixYn: string | null;

  @Column("int", { name: "prsc_qty", nullable: true, comment: "처방수량" })
  prscQty: number | null;

  @Column("varchar", {
    name: "side_flud_yn",
    nullable: true,
    comment: "Side수액여부",
    length: 1,
  })
  sideFludYn: string | null;

  @Column("varchar", {
    name: "spcm_cd",
    nullable: true,
    comment: "검체코드",
    length: 5,
  })
  spcmCd: string | null;

  @Column("varchar", {
    name: "mdtr_site_cd",
    nullable: true,
    comment: "치료부위코드",
    length: 4,
  })
  mdtrSiteCd: string | null;

  @Column("varchar", {
    name: "prsc_mesg_cnts",
    nullable: true,
    comment: "처방메시지내용",
    length: 750,
  })
  prscMesgCnts: string | null;

  @Column("varchar", {
    name: "prsc_nots",
    nullable: true,
    comment: "처방참고사항",
    length: 300,
  })
  prscNots: string | null;

  @Column("varchar", {
    name: "prsc_edtn_cnts_1",
    nullable: true,
    comment: "처방편집내용1",
    length: 450,
  })
  prscEdtnCnts_1: string | null;

  @Column("varchar", {
    name: "prsc_edtn_cnts_2",
    nullable: true,
    comment: "처방편집내용2",
    length: 450,
  })
  prscEdtnCnts_2: string | null;
}
