import { Column, Entity } from "typeorm";

@Entity("cfbasmdfmt", { schema: "cli" })
export class Cfbasmdfmt {
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

  @Column("int", { primary: true, name: "mdfr_sqno", comment: "서식일련번호" })
  mdfrSqno: number;

  @Column("int", { name: "grp_sqno", nullable: true, comment: "그룹일련번호" })
  grpSqno: number | null;

  @Column("varchar", {
    name: "mdfr_tycd",
    nullable: true,
    comment: "서식유형코드",
    length: 2,
  })
  mdfrTycd: string | null;

  @Column("varchar", {
    name: "mdfr_cd",
    nullable: true,
    comment: "서식코드",
    length: 50,
  })
  mdfrCd: string | null;

  @Column("varchar", {
    name: "mdfr_nm",
    nullable: true,
    comment: "서식명",
    length: 200,
  })
  mdfrNm: string | null;

  @Column("varchar", {
    name: "use_apdt",
    nullable: true,
    comment: "사용적용일시",
    length: 8,
  })
  useApdt: string | null;

  @Column("varchar", {
    name: "use_endt",
    nullable: true,
    comment: "사용종료일시",
    length: 8,
  })
  useEndt: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;

  @Column("longtext", {
    name: "reactjs_data",
    nullable: true,
    comment: "REACTJS데이터",
  })
  reactjsData: string | null;
}
