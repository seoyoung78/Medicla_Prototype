import { Column, Entity } from "typeorm";

@Entity("csspcmcdmt", { schema: "cli" })
export class Csspcmcdmt {
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
    name: "spcm_cd",
    comment: "검체코드",
    length: 10,
  })
  spcmCd: string;

  @Column("varchar", {
    name: "ctnr_cd",
    nullable: true,
    comment: "용기코드",
    length: 10,
  })
  ctnrCd: string | null;

  @Column("int", { name: "seq", nullable: true, comment: "순서" })
  seq: number | null;

  @Column("varchar", {
    name: "spcm_hnm",
    nullable: true,
    comment: "검체한글명",
    length: 50,
  })
  spcmHnm: string | null;

  @Column("varchar", {
    name: "spcm_enm",
    nullable: true,
    comment: "검체영문명",
    length: 50,
  })
  spcmEnm: string | null;

  @Column("varchar", {
    name: "spcm_scrn_nm",
    nullable: true,
    comment: "검체화면명",
    length: 50,
  })
  spcmScrnNm: string | null;

  @Column("varchar", {
    name: "spcm_labl_nm",
    nullable: true,
    comment: "검체라벨명",
    length: 20,
  })
  spcmLablNm: string | null;

  @Column("varchar", {
    name: "spcm_grp_cd",
    nullable: true,
    comment: "검체그룹코드",
    length: 4,
  })
  spcmGrpCd: string | null;

  @Column("varchar", {
    name: "blcl_yn",
    nullable: true,
    comment: "채혈여부",
    length: 1,
  })
  blclYn: string | null;

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
}
