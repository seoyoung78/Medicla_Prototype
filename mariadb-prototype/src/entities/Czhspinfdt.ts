import { Column, Entity } from "typeorm";

@Entity("czhspinfdt", { schema: "cli" })
export class Czhspinfdt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 13 })
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
    name: "rpry_incg_hspt_yn",
    nullable: true,
    comment: "호흡기전담클리닉여부",
    length: 1,
  })
  rpryIncgHsptYn: string | null;

  @Column("varchar", {
    name: "spfm_excp_regn_yn",
    nullable: true,
    comment: "의약분업예외지역여부",
    length: 1,
  })
  spfmExcpRegnYn: string | null;

  @Column("varchar", {
    name: "mdcl_vnrb_regn_yn",
    nullable: true,
    comment: "의료취약지역여부",
    length: 1,
  })
  mdclVnrbRegnYn: string | null;

  @Column("varchar", {
    name: "chbr_vnrb_regn_yn",
    nullable: true,
    comment: "분만취약지역여부",
    length: 1,
  })
  chbrVnrbRegnYn: string | null;

  @Column("varchar", {
    primary: true,
    name: "apdy",
    comment: "적용일자",
    length: 8,
  })
  apdy: string;

  @Column("varchar", {
    name: "endy",
    nullable: true,
    comment: "종료일자",
    length: 8,
  })
  endy: string | null;
}
