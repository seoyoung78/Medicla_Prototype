import { Column, Entity } from "typeorm";

@Entity("czsuittymt", { schema: "cli" })
export class Czsuittymt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 15 })
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
    name: "item_type",
    comment: "ITEM유형",
    length: 8,
  })
  itemType: string;

  @Column("varchar", {
    primary: true,
    name: "item_cd",
    comment: "ITEM코드",
    length: 8,
  })
  itemCd: string;

  @Column("varchar", {
    name: "item_type_nm",
    nullable: true,
    comment: "ITEM유형명칭",
    length: 100,
  })
  itemTypeNm: string | null;

  @Column("varchar", {
    name: "inbs_aply_dvcd",
    nullable: true,
    comment: "보험기준적용구분코드",
    length: 2,
  })
  inbsAplyDvcd: string | null;

  @Column("varchar", { name: "dgns_cd", comment: "진단코드", length: 10 })
  dgnsCd: string;

  @Column("varchar", {
    name: "dgns_hnm",
    nullable: true,
    comment: "진단한글명",
    length: 300,
  })
  dgnsHnm: string | null;

  @Column("varchar", {
    name: "cfsc_spcf_rgno",
    nullable: true,
    comment: "산정특례특정기호",
    length: 5,
  })
  cfscSpcfRgno: string | null;
}
