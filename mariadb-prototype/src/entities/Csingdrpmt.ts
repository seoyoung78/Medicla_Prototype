import { Column, Entity } from "typeorm";

@Entity("csingdrpmt", { schema: "cli" })
export class Csingdrpmt {
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

  @Column("datetime", {
    primary: true,
    name: "last_uddt",
    comment: "최종수정일시",
  })
  lastUddt: Date;

  @Column("varchar", {
    name: "ingr_drpp_cd",
    comment: "성분제제코드",
    length: 15,
  })
  ingrDrppCd: string;

  @Column("varchar", {
    name: "ingr_drpp_hnm",
    nullable: true,
    comment: "성분제제한글명",
    length: 100,
  })
  ingrDrppHnm: string | null;

  @Column("varchar", {
    name: "ingr_drpp_abnm",
    nullable: true,
    comment: "성분제제약어명",
    length: 30,
  })
  ingrDrppAbnm: string | null;

  @Column("varchar", {
    name: "bass_dosg",
    nullable: true,
    comment: "기준용량",
    length: 3,
  })
  bassDosg: string | null;

  @Column("varchar", {
    name: "strg_tmpt",
    nullable: true,
    comment: "보관온도",
    length: 10,
  })
  strgTmpt: string | null;

  @Column("varchar", {
    name: "blod_brcd",
    nullable: true,
    comment: "혈액바코드",
    length: 10,
  })
  blodBrcd: string | null;

  @Column("varchar", {
    name: "blod_dvsn",
    nullable: true,
    comment: "혈액구분",
    length: 1,
  })
  blodDvsn: string | null;

  @Column("varchar", {
    name: "drpp_dvsn",
    nullable: true,
    comment: "제제구분",
    length: 3,
  })
  drppDvsn: string | null;

  @Column("int", { name: "seq", nullable: true, comment: "순서" })
  seq: number | null;

  @Column("varchar", {
    name: "rmrk",
    nullable: true,
    comment: "비고",
    length: 500,
  })
  rmrk: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;
}
