import { Column, Entity } from "typeorm";

@Entity("cfmdfautmt", { schema: "cli" })
export class Cfmdfautmt {
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

  @Column("int", { primary: true, name: "sqno", comment: "일련번호" })
  sqno: number;

  @Column("int", { name: "mdfr_sqno", nullable: true, comment: "서식일련번호" })
  mdfrSqno: number | null;

  @Column("varchar", {
    name: "dept_cd",
    nullable: true,
    comment: "부서코드",
    length: 20,
  })
  deptCd: string | null;

  @Column("varchar", {
    name: "usid",
    nullable: true,
    comment: "사용자ID",
    length: 20,
  })
  usid: string | null;
}
