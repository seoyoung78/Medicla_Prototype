import { Column, Entity } from "typeorm";

@Entity("cpmenmngmt", { schema: "cli" })
export class Cpmenmngmt {
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

  @Column("int", { primary: true, name: "id", comment: "아이디" })
  id: number;

  @Column("varchar", {
    name: "scrn_id",
    nullable: true,
    comment: "화면아이디",
    length: 10,
  })
  scrnId: string | null;

  @Column("varchar", {
    name: "menu_nm",
    nullable: true,
    comment: "메뉴명",
    length: 200,
  })
  menuNm: string | null;

  @Column("int", {
    name: "uprn_menu_id",
    nullable: true,
    comment: "상위메뉴아이디",
  })
  uprnMenuId: number | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;

  @Column("int", { name: "rtrv_seq", nullable: true, comment: "조회순서" })
  rtrvSeq: number | null;

  @Column("varchar", {
    name: "leaf_yn",
    nullable: true,
    comment: "최하위여부",
    length: 1,
  })
  leafYn: string | null;

  @Column("varchar", {
    name: "actv_yn",
    nullable: true,
    comment: "메뉴활성 여부",
    length: 1,
  })
  actvYn: string | null;
}
