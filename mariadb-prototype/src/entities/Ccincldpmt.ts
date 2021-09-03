import { Column, Entity } from "typeorm";

@Entity("ccincldpmt", { schema: "cli" })
export class Ccincldpmt {
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
    name: "dpst_date",
    comment: "입금일자",
    length: 8,
  })
  dpstDate: string;

  @Column("int", { primary: true, name: "dpst_sqno", comment: "입금일련번호" })
  dpstSqno: number;

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
    name: "insn_brch_cd",
    nullable: true,
    comment: "보험사코드",
    length: 30,
  })
  insnBrchCd: string | null;

  @Column("varchar", {
    name: "cut_resn_rmrk",
    nullable: true,
    comment: "삭감사유비고",
    length: 1000,
  })
  cutResnRmrk: string | null;

  @Column("varchar", {
    name: "cut_antn_cnts",
    nullable: true,
    comment: "삭감주석내용",
    length: 1000,
  })
  cutAntnCnts: string | null;

  @Column("varchar", {
    name: "clam_date",
    nullable: true,
    comment: "청구일자",
    length: 8,
  })
  clamDate: string | null;

  @Column("int", { name: "clam_sqno", nullable: true, comment: "청구일련번호" })
  clamSqno: number | null;

  @Column("varchar", {
    name: "cncl_yn",
    nullable: true,
    comment: "취소여부",
    length: 1,
  })
  cnclYn: string | null;
}
