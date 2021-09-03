import { Column, Entity } from "typeorm";

@Entity("czhspinfmt", { schema: "cli" })
export class Czhspinfmt {
  @Column("varchar", {
    primary: true,
    name: "hspt_cd",
    comment: "병원코드",
    length: 13,
  })
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

  @Column("varchar", { name: "hspt_nm", comment: "병원명", length: 50 })
  hsptNm: string;

  @Column("varchar", {
    name: "hspt_grad",
    nullable: true,
    comment: "병원등급",
    length: 5,
  })
  hsptGrad: string | null;

  @Column("varchar", {
    name: "rprs_nm",
    nullable: true,
    comment: "대표자이름",
    length: 50,
  })
  rprsNm: string | null;

  @Column("varchar", {
    name: "hspt_enm",
    nullable: true,
    comment: "병원영문명",
    length: 50,
  })
  hsptEnm: string | null;

  @Column("varchar", {
    name: "hmpg_url",
    nullable: true,
    comment: "홈페이지URL",
    length: 3000,
  })
  hmpgUrl: string | null;

  @Column("varchar", {
    name: "hspt_basc_addr",
    nullable: true,
    comment: "병원기본주소",
    length: 300,
  })
  hsptBascAddr: string | null;

  @Column("varchar", {
    name: "hspt_detl_addr",
    nullable: true,
    comment: "병원상세주소",
    length: 300,
  })
  hsptDetlAddr: string | null;

  @Column("varchar", {
    name: "pstl_no",
    nullable: true,
    comment: "우편번호",
    length: 10,
  })
  pstlNo: string | null;

  @Column("varchar", {
    name: "rprn_tel",
    nullable: true,
    comment: "대표전화번호",
    length: 30,
  })
  rprnTel: string | null;

  @Column("varchar", {
    name: "rprn_fax_no",
    nullable: true,
    comment: "대표팩스번호",
    length: 30,
  })
  rprnFaxNo: string | null;

  @Column("varchar", {
    name: "brno",
    nullable: true,
    comment: "사업자등록번호",
    length: 10,
  })
  brno: string | null;

  @Column("varchar", {
    name: "irno",
    nullable: true,
    comment: "법인등록번호",
    length: 13,
  })
  irno: string | null;

  @Column("varchar", {
    name: "hsch_nm",
    nullable: true,
    comment: "병원장성명",
    length: 50,
  })
  hschNm: string | null;

  @Column("varchar", {
    name: "lgpr_estb_date",
    nullable: true,
    comment: "법인설립일자",
    length: 8,
  })
  lgprEstbDate: string | null;

  @Column("varchar", {
    name: "hspt_engl_addr",
    nullable: true,
    comment: "병원영문주소",
    length: 300,
  })
  hsptEnglAddr: string | null;

  @Column("varchar", {
    name: "rcpr_inst_rgno",
    nullable: true,
    comment: "요양기관기호",
    length: 8,
  })
  rcprInstRgno: string | null;

  @Column("int", {
    name: "prmt_bed_cnt",
    nullable: true,
    comment: "승인병상수",
  })
  prmtBedCnt: number | null;

  @Column("varchar", {
    name: "hspt_logo_img",
    nullable: true,
    comment: "병원로고이미지",
    length: 256,
  })
  hsptLogoImg: string | null;

  @Column("varchar", {
    name: "emal",
    nullable: true,
    comment: "이메일",
    length: 320,
  })
  emal: string | null;

  @Column("varchar", {
    name: "rprt_cd",
    nullable: true,
    comment: "보고서코드",
    length: 20,
  })
  rprtCd: string | null;

  @Column("varchar", {
    name: "grp_hspt_cd",
    nullable: true,
    comment: "그룹병원코드",
    length: 8,
  })
  grpHsptCd: string | null;
}
