import { Column, Entity } from "typeorm";

@Entity("cxmbrmngmt", { schema: "cli" })
export class Cxmbrmngmt {
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
    name: "usid",
    comment: "사용자ID",
    length: 20,
  })
  usid: string;

  @Column("varchar", {
    primary: true,
    name: "dept_cd",
    comment: "부서코드",
    length: 10,
  })
  deptCd: string;

  @Column("varchar", {
    name: "main_dept_yn",
    nullable: true,
    comment: "주부서여부",
    length: 1,
  })
  mainDeptYn: string | null;

  @Column("varchar", {
    name: "mdcr_dept_cd",
    nullable: true,
    comment: "진료부서코드",
    length: 6,
  })
  mdcrDeptCd: string | null;
}
