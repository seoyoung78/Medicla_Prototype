import { Column, Entity } from "typeorm";

@Entity("crdgnsetmt", { schema: "cli" })
export class Crdgnsetmt {
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

  @Column("varchar", {
    name: "dgns_set_clsf_nm",
    nullable: true,
    comment: "진단Set분류명",
    length: 150,
  })
  dgnsSetClsfNm: string | null;

  @Column("varchar", {
    name: "dgns_set_clsf_cd",
    nullable: true,
    comment: "진단Set분류코드",
    length: 1,
  })
  dgnsSetClsfCd: string | null;

  @Column("varchar", {
    name: "mddp_cd",
    nullable: true,
    comment: "진료과코드",
    length: 10,
  })
  mddpCd: string | null;

  @Column("varchar", {
    name: "dgns_set_usid",
    nullable: true,
    comment: "진단Set사용자ID",
    length: 20,
  })
  dgnsSetUsid: string | null;

  @Column("int", {
    name: "dgns_set_dspl_seq",
    nullable: true,
    comment: "진단Set나열순서",
  })
  dgnsSetDsplSeq: number | null;

  @Column("int", {
    name: "dgns_set_uprn_cd",
    nullable: true,
    comment: "진단Set상위코드",
  })
  dgnsSetUprnCd: number | null;

  @Column("varchar", {
    name: "lwrn_yn",
    nullable: true,
    comment: "하위여부",
    length: 1,
  })
  lwrnYn: string | null;
}
