import { Column, Entity } from "typeorm";

@Entity("caautmngmt", { schema: "cli" })
export class Caautmngmt {
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
    primary: true,
    name: "auth_no",
    comment: "권한번호",
    length: 10,
  })
  authNo: string;

  @Column("varchar", {
    name: "auth_nm",
    nullable: true,
    comment: "권한명",
    length: 1000,
  })
  authNm: string | null;
}
