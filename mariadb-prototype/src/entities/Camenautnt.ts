import { Column, Entity } from "typeorm";

@Entity("camenautnt", { schema: "cli" })
export class Camenautnt {
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
    primary: true,
    name: "menu_id",
    comment: "메뉴코드",
    length: 13,
  })
  menuId: string;

  @Column("int", {
    name: "menu_prnt_seq",
    nullable: true,
    comment: "메뉴출력순서",
  })
  menuPrntSeq: number | null;

  @Column("varchar", {
    name: "basc_menu_yn",
    nullable: true,
    comment: "기본메뉴여부",
    length: 1,
  })
  bascMenuYn: string | null;

  @Column("varchar", {
    name: "rtrv_auth_yn",
    nullable: true,
    comment: "조회권한여부",
    length: 1,
  })
  rtrvAuthYn: string | null;

  @Column("varchar", {
    name: "stor_auth_yn",
    nullable: true,
    comment: "저장권한여부",
    length: 1,
  })
  storAuthYn: string | null;

  @Column("varchar", {
    name: "prnt_auth_yn",
    nullable: true,
    comment: "출력권한여부",
    length: 1,
  })
  prntAuthYn: string | null;
}
