import { Column, Entity } from "typeorm";

@Entity("crprogrsnt", { schema: "cli" })
export class Crprogrsnt {
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

  @Column("varchar", { name: "pid", comment: "환자등록번호", length: 20 })
  pid: string;

  @Column("varchar", {
    name: "inpt_dt",
    nullable: true,
    comment: "입력일시",
    length: 50,
  })
  inptDt: string | null;

  @Column("varchar", {
    name: "prgr_rcrd",
    nullable: true,
    comment: "경과기록",
    length: 2000,
  })
  prgrRcrd: string | null;

  @Column("varchar", {
    name: "sbjt_cnts",
    nullable: true,
    comment: "Subjective",
    length: 2000,
  })
  sbjtCnts: string | null;

  @Column("varchar", {
    name: "objt_cnts",
    nullable: true,
    comment: "Objective",
    length: 2000,
  })
  objtCnts: string | null;

  @Column("varchar", {
    name: "asss_cnts",
    nullable: true,
    comment: "Assessment",
    length: 2000,
  })
  asssCnts: string | null;

  @Column("varchar", {
    name: "plan",
    nullable: true,
    comment: "Plan",
    length: 2000,
  })
  plan: string | null;

  @Column("varchar", {
    name: "mddp_cd",
    nullable: true,
    comment: "진료과코드",
    length: 6,
  })
  mddpCd: string | null;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;
}
