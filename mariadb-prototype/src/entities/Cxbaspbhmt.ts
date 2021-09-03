import { Column, Entity } from "typeorm";

@Entity("cxbaspbhmt", { schema: "cli" })
export class Cxbaspbhmt {
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
    name: "pbhl_date",
    comment: "공휴일 일자",
    length: 8,
  })
  pbhlDate: string;

  @Column("varchar", { name: "pbhl_nm", comment: "공휴일명", length: 100 })
  pbhlNm: string;

  @Column("varchar", {
    name: "pbhl_dvcd",
    comment: "공휴일구분코드",
    length: 1,
  })
  pbhlDvcd: string;

  @Column("varchar", { name: "mdcr_yn", comment: "진료여부", length: 1 })
  mdcrYn: string;

  @Column("varchar", {
    name: "ptaf_rcpn_psbl_yn",
    nullable: true,
    comment: "원무접수가능여부",
    length: 1,
  })
  ptafRcpnPsblYn: string | null;

  @Column("varchar", {
    name: "pbhl_adtn_aply_yn",
    comment: "공휴일가산적용여부",
    length: 1,
  })
  pbhlAdtnAplyYn: string;
}
