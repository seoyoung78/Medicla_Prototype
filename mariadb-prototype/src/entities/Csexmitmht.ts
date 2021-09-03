import { Column, Entity } from "typeorm";

@Entity("csexmitmht", { schema: "cli" })
export class Csexmitmht {
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
    name: "exmn_cd",
    comment: "검사코드",
    length: 12,
  })
  exmnCd: string;

  @Column("varchar", {
    name: "grp_dvcd",
    nullable: true,
    comment: "그룹구분코드",
    length: 1,
  })
  grpDvcd: string | null;

  @Column("varchar", {
    name: "exmn_part_cd",
    nullable: true,
    comment: "검사파트코드",
    length: 5,
  })
  exmnPartCd: string | null;

  @Column("varchar", {
    name: "exmn_sub_part_cd",
    nullable: true,
    comment: "검사부파트코드",
    length: 5,
  })
  exmnSubPartCd: string | null;

  @Column("varchar", {
    name: "exmn_hnm",
    nullable: true,
    comment: "검사한글명",
    length: 200,
  })
  exmnHnm: string | null;

  @Column("varchar", {
    name: "exmn_enm",
    nullable: true,
    comment: "검사영문명",
    length: 200,
  })
  exmnEnm: string | null;

  @Column("varchar", {
    name: "exmn_abnm",
    nullable: true,
    comment: "검사약어명",
    length: 200,
  })
  exmnAbnm: string | null;

  @Column("varchar", {
    name: "exmn_rptg_nm",
    nullable: true,
    comment: "검사보고명",
    length: 200,
  })
  exmnRptgNm: string | null;

  @Column("varchar", {
    name: "exmn_brcd_nm",
    nullable: true,
    comment: "검사바코드명",
    length: 200,
  })
  exmnBrcdNm: string | null;

  @Column("int", {
    name: "scrn_mark_seq",
    nullable: true,
    comment: "화면표시순서",
  })
  scrnMarkSeq: number | null;

  @Column("int", {
    name: "prnt_mark_seq",
    nullable: true,
    comment: "출력표시순서",
  })
  prntMarkSeq: number | null;

  @Column("varchar", {
    name: "exmn_type_dvcd",
    nullable: true,
    comment: "검사유형구분코드",
    length: 1,
  })
  exmnTypeDvcd: string | null;

  @Column("varchar", {
    name: "apnt_exmn_yn",
    nullable: true,
    comment: "예약검사여부",
    length: 1,
  })
  apntExmnYn: string | null;

  @Column("varchar", {
    name: "entd_exmn_yn",
    nullable: true,
    comment: "수탁검사여부",
    length: 1,
  })
  entdExmnYn: string | null;

  @Column("varchar", {
    name: "npo_yn",
    nullable: true,
    comment: "금식여부",
    length: 1,
  })
  npoYn: string | null;

  @Column("int", { name: "brcd_cnt", nullable: true, comment: "바코드수" })
  brcdCnt: number | null;

  @Column("varchar", { name: "spcm_cd_1", comment: "검체코드1", length: 5 })
  spcmCd_1: string;

  @Column("varchar", { name: "spcm_cd_2", comment: "검체코드2", length: 5 })
  spcmCd_2: string;

  @Column("varchar", { name: "spcm_cd_3", comment: "검체코드3", length: 5 })
  spcmCd_3: string;

  @Column("varchar", {
    name: "ctnr_cd_1",
    nullable: true,
    comment: "용기코드1",
    length: 5,
  })
  ctnrCd_1: string | null;

  @Column("varchar", {
    name: "ctnr_cd_2",
    nullable: true,
    comment: "용기코드2",
    length: 5,
  })
  ctnrCd_2: string | null;

  @Column("varchar", {
    name: "ctnr_cd_3",
    nullable: true,
    comment: "용기코드3",
    length: 5,
  })
  ctnrCd_3: string | null;

  @Column("decimal", {
    name: "spcm_need_qty_1",
    nullable: true,
    comment: "검체필요수량1",
    precision: 4,
    scale: 1,
  })
  spcmNeedQty_1: string | null;

  @Column("decimal", {
    name: "spcm_need_qty_2",
    nullable: true,
    comment: "검체필요수량2",
    precision: 4,
    scale: 1,
  })
  spcmNeedQty_2: string | null;

  @Column("decimal", {
    name: "spcm_need_qty_3",
    nullable: true,
    comment: "검체필요수량3",
    precision: 4,
    scale: 1,
  })
  spcmNeedQty_3: string | null;

  @Column("varchar", {
    name: "blcl_lctn_cd",
    nullable: true,
    comment: "채혈장소코드",
    length: 2,
  })
  blclLctnCd: string | null;

  @Column("varchar", {
    name: "rslt_dvcd",
    nullable: true,
    comment: "결과구분코드",
    length: 1,
  })
  rsltDvcd: string | null;

  @Column("varchar", {
    name: "dgns_exmn_rslt_uncd",
    nullable: true,
    comment: "진단검사결과단위코드",
    length: 3,
  })
  dgnsExmnRsltUncd: string | null;

  @Column("varchar", {
    name: "snsp_yn",
    nullable: true,
    comment: "단독검체여부",
    length: 1,
  })
  snspYn: string | null;

  @Column("varchar", {
    name: "refr_shet_mdfr_id",
    nullable: true,
    comment: "의뢰지서식ID",
    length: 11,
  })
  refrShetMdfrId: string | null;

  @Column("varchar", {
    name: "rslt_shet_mdfr_id",
    nullable: true,
    comment: "결과지서식ID",
    length: 11,
  })
  rsltShetMdfrId: string | null;

  @Column("varchar", {
    name: "exmn_gdln_use_yn",
    nullable: true,
    comment: "검사지침사용여부",
    length: 1,
  })
  exmnGdlnUseYn: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;

  @Column("varchar", {
    name: "prsc_use_yn",
    nullable: true,
    comment: "처방사용여부",
    length: 1,
  })
  prscUseYn: string | null;

  @Column("varchar", {
    name: "exmn_dowk_dvcd",
    nullable: true,
    comment: "검사요일구분코드",
    length: 2,
  })
  exmnDowkDvcd: string | null;

  @Column("varchar", {
    name: "exmn_dowk",
    nullable: true,
    comment: "검사요일",
    length: 10,
  })
  exmnDowk: string | null;
}
