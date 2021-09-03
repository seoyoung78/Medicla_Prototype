import { Column, Entity } from "typeorm";

@Entity("csctnrcdmt", { schema: "cli" })
export class Csctnrcdmt {
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
    name: "ctnr_cd",
    comment: "용기코드",
    length: 10,
  })
  ctnrCd: string;

  @Column("varchar", {
    name: "ctnr_nm",
    nullable: true,
    comment: "용기명",
    length: 50,
  })
  ctnrNm: string | null;

  @Column("varchar", {
    name: "ctnr_scrn_nm",
    nullable: true,
    comment: "용기화면명",
    length: 50,
  })
  ctnrScrnNm: string | null;

  @Column("varchar", {
    name: "ctnr_abnm",
    nullable: true,
    comment: "용기약어명",
    length: 50,
  })
  ctnrAbnm: string | null;

  @Column("varchar", {
    name: "ctnr_labl_nm",
    nullable: true,
    comment: "용기라벨명",
    length: 10,
  })
  ctnrLablNm: string | null;

  @Column("decimal", {
    name: "ctnr_dosg",
    nullable: true,
    comment: "용기용량",
    precision: 5,
    scale: 1,
  })
  ctnrDosg: string | null;

  @Column("varchar", {
    name: "ctnr_uncd",
    nullable: true,
    comment: "용기단위코드",
    length: 30,
  })
  ctnrUncd: string | null;

  @Column("int", { name: "ctnr_img", nullable: true, comment: "용기이미지" })
  ctnrImg: number | null;

  @Column("varchar", {
    name: "ctnr_type_dvsn",
    nullable: true,
    comment: "용기유형구분",
    length: 20,
  })
  ctnrTypeDvsn: string | null;

  @Column("varchar", {
    name: "strg_mthd_cnts",
    nullable: true,
    comment: "보관방법내용",
    length: 100,
  })
  strgMthdCnts: string | null;

  @Column("varchar", {
    name: "vald_perd",
    nullable: true,
    comment: "유효기간",
    length: 20,
  })
  valdPerd: string | null;

  @Column("varchar", {
    name: "gods_no",
    nullable: true,
    comment: "물품번호",
    length: 15,
  })
  godsNo: string | null;

  @Column("int", { name: "seq", nullable: true, comment: "순서" })
  seq: number | null;

  @Column("varchar", {
    name: "apdy",
    nullable: true,
    comment: "적용일자",
    length: 8,
  })
  apdy: string | null;

  @Column("varchar", {
    name: "endy",
    nullable: true,
    comment: "종료일자",
    length: 8,
  })
  endy: string | null;

  @Column("varchar", {
    name: "rmrk",
    nullable: true,
    comment: "비고",
    length: 500,
  })
  rmrk: string | null;
}
