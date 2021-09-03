import { Column, Entity } from "typeorm";

@Entity("cfmdfgrpmt", { schema: "cli" })
export class Cfmdfgrpmt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 10 })
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

  @Column("int", { primary: true, name: "grp_sqno", comment: "그룹일련번호" })
  grpSqno: number;

  @Column("varchar", {
    name: "grp_cd",
    nullable: true,
    comment: "그룹코드",
    length: 50,
  })
  grpCd: string | null;

  @Column("varchar", {
    name: "grp_nm",
    nullable: true,
    comment: "그룹명",
    length: 200,
  })
  grpNm: string | null;

  @Column("varchar", {
    name: "grp_enm",
    nullable: true,
    comment: "그룹 영문명",
    length: 200,
  })
  grpEnm: string | null;

  @Column("varchar", {
    name: "mdfr_tycd",
    nullable: true,
    comment: "서식유형코드",
    length: 2,
  })
  mdfrTycd: string | null;

  @Column("varchar", {
    name: "uprn_grp_cd",
    nullable: true,
    comment: "상위그룹코드",
    length: 50,
  })
  uprnGrpCd: string | null;
}
