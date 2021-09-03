import { Column, Entity } from "typeorm";

@Entity("cxrprmngmt", { schema: "cli" })
export class Cxrprmngmt {
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

  @Column("int", { primary: true, name: "rprt_id", comment: "보고서아이디" })
  rprtId: number;

  @Column("int", {
    name: "rprt_uprn_id",
    nullable: true,
    comment: "보고서상위아이디",
  })
  rprtUprnId: number | null;

  @Column("varchar", {
    name: "rprt_nm",
    nullable: true,
    comment: "보고서명",
    length: 128,
  })
  rprtNm: string | null;

  @Column("varchar", {
    name: "rprt_conn_dvsn",
    nullable: true,
    comment: "보고서연결구분",
    length: 1,
  })
  rprtConnDvsn: string | null;

  @Column("varchar", {
    name: "rprt_conn_valu",
    nullable: true,
    comment: "보고서연결값",
    length: 4000,
  })
  rprtConnValu: string | null;

  @Column("varchar", {
    name: "rprt_use_yn",
    nullable: true,
    comment: "보고서사용여부",
    length: 1,
  })
  rprtUseYn: string | null;

  @Column("int", { name: "seq", nullable: true, comment: "순서" })
  seq: number | null;

  @Column("varchar", {
    name: "srch_dvcd",
    nullable: true,
    comment: "검색구분코드",
    length: 1,
  })
  srchDvcd: string | null;

  @Column("varchar", {
    name: "srch_frm_clss",
    nullable: true,
    comment: "검색폼클래스",
    length: 128,
  })
  srchFrmClss: string | null;

  @Column("varchar", {
    name: "file_frmt",
    nullable: true,
    comment: "파일형식",
    length: 20,
  })
  fileFrmt: string | null;

  @Column("int", { name: "use_notm", nullable: true, comment: "사용횟수" })
  useNotm: number | null;

  @Column("varchar", {
    name: "cnts_expl",
    nullable: true,
    comment: "내용설명",
    length: 2000,
  })
  cntsExpl: string | null;
}
