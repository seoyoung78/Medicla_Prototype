import { Column, Entity } from "typeorm";

@Entity("csexmrfvht", { schema: "cli" })
export class Csexmrfvht {
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
    name: "exmn_cd",
    comment: "검사코드",
    length: 15,
  })
  exmnCd: string;

  @Column("varchar", {
    primary: true,
    name: "sex_cd",
    comment: "성별코드",
    length: 1,
  })
  sexCd: string;

  @Column("varchar", {
    primary: true,
    name: "spcm_cd",
    comment: "검체코드",
    length: 10,
  })
  spcmCd: string;

  @Column("varchar", {
    primary: true,
    name: "aply_strt_valu",
    comment: "적용시작값",
    length: 20,
  })
  aplyStrtValu: string;

  @Column("varchar", {
    primary: true,
    name: "apdy",
    comment: "적용일자",
    length: 8,
  })
  apdy: string;

  @Column("varchar", {
    name: "aply_strt_uncd",
    nullable: true,
    comment: "적용시작단위코드",
    length: 20,
  })
  aplyStrtUncd: string | null;

  @Column("varchar", {
    name: "aply_end_valu",
    nullable: true,
    comment: "적용종료값",
    length: 20,
  })
  aplyEndValu: string | null;

  @Column("varchar", {
    name: "aply_end_uncd",
    nullable: true,
    comment: "적용종료단위코드",
    length: 20,
  })
  aplyEndUncd: string | null;

  @Column("varchar", {
    name: "endy",
    nullable: true,
    comment: "종료일자",
    length: 8,
  })
  endy: string | null;

  @Column("varchar", {
    name: "dvsn",
    nullable: true,
    comment: "구분",
    length: 1,
  })
  dvsn: string | null;

  @Column("varchar", {
    name: "lwlm_nmvl",
    nullable: true,
    comment: "하한치",
    length: 40,
  })
  lwlmNmvl: string | null;

  @Column("varchar", {
    name: "uplm_nmvl",
    nullable: true,
    comment: "상한치",
    length: 40,
  })
  uplmNmvl: string | null;

  @Column("varchar", {
    name: "rfvl_char_valu",
    nullable: true,
    comment: "참조치문자값",
    length: 2000,
  })
  rfvlCharValu: string | null;
}
