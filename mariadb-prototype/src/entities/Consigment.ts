import { Column, Entity } from "typeorm";

@Entity("consigment", { schema: "cli" })
export class Consigment {
  @Column("varchar", { name: "hspt_cd", comment: "TRIAL", length: 20 })
  hsptCd: string;

  @Column("int", { primary: true, name: "prsc_sqno", comment: "TRIAL" })
  prscSqno: number;

  @Column("varchar", {
    primary: true,
    name: "pid",
    comment: "TRIAL",
    length: 20,
  })
  pid: string;

  @Column("varchar", {
    name: "pt_nm",
    nullable: true,
    comment: "TRIAL",
    length: 40,
  })
  ptNm: string | null;

  @Column("varchar", {
    name: "sex_age",
    nullable: true,
    comment: "TRIAL",
    length: 20,
  })
  sexAge: string | null;

  @Column("varchar", {
    primary: true,
    name: "prsc_date",
    comment: "TRIAL",
    length: 8,
  })
  prscDate: string;

  @Column("varchar", {
    name: "user_nm",
    nullable: true,
    comment: "TRIAL",
    length: 20,
  })
  userNm: string | null;

  @Column("varchar", {
    name: "prsc_nm",
    nullable: true,
    comment: "TRIAL",
    length: 20,
  })
  prscNm: string | null;

  @Column("varchar", {
    name: "spcm_hnm",
    nullable: true,
    comment: "TRIAL",
    length: 20,
  })
  spcmHnm: string | null;

  @Column("varchar", {
    name: "bacode_nm",
    nullable: true,
    comment: "TRIAL",
    length: 20,
  })
  bacodeNm: string | null;

  @Column("varchar", {
    name: "dept_hnm",
    nullable: true,
    comment: "TRIAL",
    length: 20,
  })
  deptHnm: string | null;

  @Column("varchar", {
    name: "state",
    nullable: true,
    comment: "TRIAL",
    length: 20,
  })
  state: string | null;

  @Column("varchar", {
    name: "trans_date",
    nullable: true,
    comment: "TRIAL",
    length: 8,
  })
  transDate: string | null;

  @Column("varchar", {
    name: "reply_date",
    nullable: true,
    comment: "TRIAL",
    length: 8,
  })
  replyDate: string | null;

  @Column("varchar", {
    name: "cons_yn",
    nullable: true,
    comment: "TRIAL",
    length: 1,
    default: () => "'N'",
  })
  consYn: string | null;

  @Column("int", { name: "rcpn_sqno", comment: "TRIAL" })
  rcpnSqno: number;

  @Column("char", {
    name: "trial413",
    nullable: true,
    comment: "TRIAL",
    length: 1,
  })
  trial413: string | null;
}
