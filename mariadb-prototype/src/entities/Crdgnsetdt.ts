import { Column, Entity } from "typeorm";

@Entity("crdgnsetdt", { schema: "cli" })
export class Crdgnsetdt {
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
    name: "dgns_set_clsf_sqno",
    comment: "진단Set분류일련번호",
  })
  dgnsSetClsfSqno: number;

  @Column("int", {
    primary: true,
    name: "dgns_set_sqno",
    comment: "진단Set일련번호",
  })
  dgnsSetSqno: number;

  @Column("int", { name: "dgns_cd", comment: "진단코드" })
  dgnsCd: number;

  @Column("varchar", {
    name: "clnc_dgns_nm",
    nullable: true,
    comment: "임상진단명",
    length: 300,
  })
  clncDgnsNm: string | null;

  @Column("varchar", {
    name: "dgns_nots",
    nullable: true,
    comment: "진단참고사항",
    length: 300,
  })
  dgnsNots: string | null;

  @Column("int", {
    name: "dgns_set_dspl_seq",
    nullable: true,
    comment: "진단Set나열순서",
  })
  dgnsSetDsplSeq: number | null;
}
