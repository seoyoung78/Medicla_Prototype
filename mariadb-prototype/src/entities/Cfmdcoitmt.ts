import { Column, Entity } from "typeorm";

@Entity("cfmdcoitmt", { schema: "cli" })
export class Cfmdcoitmt {
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

  @Column("varchar", {
    name: "mdfr_item_clsf_cd",
    nullable: true,
    comment: "서식항목분류코드",
    length: 10,
  })
  mdfrItemClsfCd: string | null;

  @Column("varchar", {
    name: "mdfr_item_cd",
    nullable: true,
    comment: "서식항목코드",
    length: 20,
  })
  mdfrItemCd: string | null;

  @Column("varchar", {
    name: "item_nm",
    nullable: true,
    comment: "항목명",
    length: 200,
  })
  itemNm: string | null;

  @Column("varchar", {
    name: "item_cnts",
    nullable: true,
    comment: "항목내용",
    length: 1000,
  })
  itemCnts: string | null;

  @Column("longtext", { name: "sql_text", nullable: true, comment: "SQL" })
  sqlText: string | null;
}
