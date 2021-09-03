import { Column, Entity } from "typeorm";

@Entity("csexmeqpmt", { schema: "cli" })
export class Csexmeqpmt {
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
    name: "eqpm_cd",
    comment: "장비코드",
    length: 20,
  })
  eqpmCd: string;

  @Column("varchar", {
    name: "exrm_cd",
    nullable: true,
    comment: "검사실코드",
    length: 5,
  })
  exrmCd: string | null;

  @Column("varchar", {
    name: "eqpm_nm",
    nullable: true,
    comment: "장비명",
    length: 50,
  })
  eqpmNm: string | null;

  @Column("varchar", {
    name: "eqpm_modl_nm",
    nullable: true,
    comment: "장비모델명",
    length: 50,
  })
  eqpmModlNm: string | null;

  @Column("varchar", {
    name: "buy_date",
    nullable: true,
    comment: "구입일자",
    length: 8,
  })
  buyDate: string | null;

  @Column("varchar", {
    name: "dsps_date",
    nullable: true,
    comment: "폐기일자",
    length: 8,
  })
  dspsDate: string | null;

  @Column("varchar", {
    name: "buy_co_nm",
    nullable: true,
    comment: "구입회사명",
    length: 50,
  })
  buyCoNm: string | null;

  @Column("varchar", {
    name: "mnfc_co_nm",
    nullable: true,
    comment: "제조회사명",
    length: 50,
  })
  mnfcCoNm: string | null;

  @Column("varchar", {
    name: "ctpn_1",
    nullable: true,
    comment: "연락처1",
    length: 30,
  })
  ctpn_1: string | null;

  @Column("varchar", {
    name: "ctpn_2",
    nullable: true,
    comment: "연락처2",
    length: 30,
  })
  ctpn_2: string | null;

  @Column("varchar", {
    name: "ctpn_3",
    nullable: true,
    comment: "연락처3",
    length: 30,
  })
  ctpn_3: string | null;

  @Column("varchar", {
    name: "aste_exmn_yn",
    nullable: true,
    comment: "현장검사여부",
    length: 1,
  })
  asteExmnYn: string | null;

  @Column("varchar", {
    name: "rmrk",
    nullable: true,
    comment: "비고",
    length: 500,
  })
  rmrk: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;
}
