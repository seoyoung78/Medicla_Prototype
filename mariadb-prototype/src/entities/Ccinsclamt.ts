import { Column, Entity } from "typeorm";

@Entity("ccinsclamt", { schema: "cli" })
export class Ccinsclamt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
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
    name: "clam_date",
    comment: "청구일자",
    length: 8,
  })
  clamDate: string;

  @Column("int", { primary: true, name: "clam_sqno", comment: "청구일련번호" })
  clamSqno: number;

  @Column("decimal", {
    name: "clam_amt",
    nullable: true,
    comment: "청구금액",
    precision: 15,
    scale: 2,
  })
  clamAmt: string | null;

  @Column("varchar", {
    name: "rmrk",
    nullable: true,
    comment: "비고",
    length: 1000,
  })
  rmrk: string | null;

  @Column("varchar", {
    name: "insn_brch_cd",
    nullable: true,
    comment: "보험지사코드",
    length: 30,
  })
  insnBrchCd: string | null;

  @Column("decimal", {
    name: "dpst_amt",
    nullable: true,
    comment: "입금금액",
    precision: 15,
    scale: 2,
  })
  dpstAmt: string | null;

  @Column("decimal", {
    name: "cut_amt",
    nullable: true,
    comment: "삭감금액",
    precision: 15,
    scale: 2,
  })
  cutAmt: string | null;

  @Column("varchar", {
    name: "cut_antn_cnts",
    nullable: true,
    comment: "삭감주석내용",
    length: 1000,
  })
  cutAntnCnts: string | null;

  @Column("varchar", {
    name: "insn_brch_nm",
    nullable: true,
    comment: "보험지사명",
    length: 300,
  })
  insnBrchNm: string | null;

  @Column("varchar", {
    name: "stat_cd",
    nullable: true,
    comment: "상태코드",
    length: 1,
  })
  statCd: string | null;
}
