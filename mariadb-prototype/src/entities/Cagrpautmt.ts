import { Column, Entity } from "typeorm";

@Entity("cagrpautmt", { schema: "cli" })
export class Cagrpautmt {
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
    name: "crtn_auth_yn",
    nullable: true,
    comment: "생성권한여부",
    length: 1,
  })
  crtnAuthYn: string | null;

  @Column("varchar", {
    name: "read_auth_yn",
    nullable: true,
    comment: "읽기권한여부",
    length: 1,
  })
  readAuthYn: string | null;

  @Column("varchar", {
    name: "mdfy_auth_yn",
    nullable: true,
    comment: "수정권한여부",
    length: 1,
  })
  mdfyAuthYn: string | null;

  @Column("varchar", {
    name: "delt_auth_yn",
    nullable: true,
    comment: "삭제권한여부",
    length: 1,
  })
  deltAuthYn: string | null;

  @Column("varchar", {
    primary: true,
    name: "dept_cd",
    comment: "부서코드",
    length: 10,
  })
  deptCd: string;

  @Column("varchar", {
    primary: true,
    name: "scrn_id",
    comment: "화면아이디",
    length: 10,
  })
  scrnId: string;
}
