import { Column, Entity } from "typeorm";

@Entity("csresncdmt", { schema: "cli" })
export class Csresncdmt {
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
    name: "resn_cd",
    comment: "사유코드",
    length: 20,
  })
  resnCd: string;

  @Column("varchar", {
    primary: true,
    name: "resn_dvsn",
    comment: "사유구분",
    length: 2,
  })
  resnDvsn: string;

  @Column("int", { name: "seq", nullable: true, comment: "순서" })
  seq: number | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;

  @Column("varchar", { name: "slip_cd", comment: "SLIP코드", length: 10 })
  slipCd: string;

  @Column("varchar", {
    name: "part_cd",
    nullable: true,
    comment: "파트코드",
    length: 5,
  })
  partCd: string | null;

  @Column("varchar", {
    name: "resn_cnts",
    nullable: true,
    comment: "사유내용",
    length: 200,
  })
  resnCnts: string | null;
}
