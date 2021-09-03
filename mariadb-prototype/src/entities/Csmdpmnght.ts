import { Column, Entity } from "typeorm";

@Entity("csmdpmnght", { schema: "cli" })
export class Csmdpmnght {
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
    name: "mdpr_cd",
    comment: "약품코드",
    length: 15,
  })
  mdprCd: string;

  @Column("varchar", {
    name: "mdpr_apdy",
    nullable: true,
    comment: "약품적용일자",
    length: 8,
  })
  mdprApdy: string | null;

  @Column("varchar", {
    name: "mdpr_endy",
    nullable: true,
    comment: "약품종료일자",
    length: 8,
  })
  mdprEndy: string | null;

  @Column("varchar", {
    name: "prsc_psbl_yn",
    nullable: true,
    comment: "처방가능여부",
    length: 1,
  })
  prscPsblYn: string | null;

  @Column("varchar", {
    name: "mdpr_locl_nm",
    nullable: true,
    comment: "약품로컬명",
    length: 300,
  })
  mdprLoclNm: string | null;

  @Column("varchar", {
    name: "mdpr_enm",
    nullable: true,
    comment: "약품영문명",
    length: 300,
  })
  mdprEnm: string | null;

  @Column("varchar", {
    name: "ingr_nm",
    nullable: true,
    comment: "성분명",
    length: 300,
  })
  ingrNm: string | null;

  @Column("varchar", {
    name: "efcc_clsf_cd",
    nullable: true,
    comment: "효능분류코드",
    length: 20,
  })
  efccClsfCd: string | null;

  @Column("decimal", {
    name: "adlt_priz_dosg",
    nullable: true,
    comment: "성인상용량",
    precision: 10,
    scale: 1,
  })
  adltPrizDosg: string | null;

  @Column("decimal", {
    name: "chld_priz_dosg",
    nullable: true,
    comment: "소아상용량",
    precision: 10,
    scale: 1,
  })
  chldPrizDosg: string | null;

  @Column("varchar", {
    name: "intc_cd",
    nullable: true,
    comment: "상호작용코드",
    length: 2,
  })
  intcCd: string | null;

  @Column("decimal", {
    name: "ctnt",
    nullable: true,
    comment: "함량",
    precision: 10,
    scale: 2,
  })
  ctnt: string | null;

  @Column("varchar", {
    name: "mdpr_clsf_cd",
    nullable: true,
    comment: "약품분류코드",
    length: 10,
  })
  mdprClsfCd: string | null;

  @Column("varchar", {
    name: "prsc_clsf_cd",
    nullable: true,
    comment: "처방분류코드",
    length: 2,
  })
  prscClsfCd: string | null;

  @Column("varchar", {
    name: "slip_cd",
    nullable: true,
    comment: "SLIP코드",
    length: 10,
  })
  slipCd: string | null;

  @Column("varchar", {
    name: "mdpr_dvcd",
    nullable: true,
    comment: "약품구분코드",
    length: 1,
  })
  mdprDvcd: string | null;

  @Column("varchar", {
    name: "drfr_cd",
    nullable: true,
    comment: "약품제형코드",
    length: 2,
  })
  drfrCd: string | null;

  @Column("varchar", {
    name: "phcm_nm",
    nullable: true,
    comment: "제약회사명",
    length: 100,
  })
  phcmNm: string | null;

  @Column("varchar", {
    name: "dsus_resn_cd",
    nullable: true,
    comment: "불용사유코드",
    length: 2,
  })
  dsusResnCd: string | null;

  @Column("varchar", {
    name: "dsus_date",
    nullable: true,
    comment: "약품불용일자",
    length: 8,
  })
  dsusDate: string | null;

  @Column("decimal", {
    name: "ddly_lmtd_qty",
    nullable: true,
    comment: "일일제한수량",
    precision: 15,
    scale: 3,
  })
  ddlyLmtdQty: string | null;

  @Column("varchar", {
    name: "divn_dvcd",
    nullable: true,
    comment: "분할구분코드",
    length: 1,
  })
  divnDvcd: string | null;

  @Column("varchar", {
    name: "iotm_cd",
    nullable: true,
    comment: "용법코드",
    length: 20,
  })
  iotmCd: string | null;

  @Column("varchar", {
    name: "erys_yn",
    nullable: true,
    comment: "단독여부",
    length: 1,
  })
  erysYn: string | null;

  @Column("varchar", {
    name: "acml_yn",
    nullable: true,
    comment: "누적약품여부",
    length: 1,
  })
  acmlYn: string | null;

  @Column("varchar", {
    name: "mded_trgt_yn",
    nullable: true,
    comment: "복약지도대상여부",
    length: 1,
  })
  mdedTrgtYn: string | null;

  @Column("varchar", {
    name: "hsot_prsc_dvcd",
    nullable: true,
    comment: "원외처방구분코드",
    length: 1,
  })
  hsotPrscDvcd: string | null;

  @Column("varchar", {
    name: "impt_yn",
    nullable: true,
    comment: "약품수입여부",
    length: 1,
  })
  imptYn: string | null;

  @Column("varchar", {
    name: "trtm_mdpr_yn",
    nullable: true,
    comment: "처치약품여부",
    length: 1,
  })
  trtmMdprYn: string | null;

  @Column("varchar", {
    name: "slvn_rfrg_yn",
    nullable: true,
    comment: "용제냉장여부",
    length: 1,
  })
  slvnRfrgYn: string | null;

  @Column("varchar", {
    name: "slvn_shdn_yn",
    nullable: true,
    comment: "용제차광여부",
    length: 1,
  })
  slvnShdnYn: string | null;

  @Column("varchar", {
    name: "clam_psbl_yn",
    nullable: true,
    comment: "청구가능여부",
    length: 1,
  })
  clamPsblYn: string | null;

  @Column("decimal", {
    name: "aprp_stck_qty",
    nullable: true,
    comment: "적정재고수량",
    precision: 15,
    scale: 3,
  })
  aprpStckQty: string | null;

  @Column("varchar", {
    name: "clcl_yn",
    nullable: true,
    comment: "계산여부",
    length: 1,
  })
  clclYn: string | null;

  @Column("varchar", {
    name: "gods_cd",
    nullable: true,
    comment: "물품코드",
    length: 15,
  })
  godsCd: string | null;

  @Column("varchar", {
    name: "spfm_excp_cd",
    nullable: true,
    comment: "의약분업예외코드",
    length: 2,
  })
  spfmExcpCd: string | null;

  @Column("varchar", {
    name: "sbst_mdpr_cd",
    nullable: true,
    comment: "대체약품코드",
    length: 15,
  })
  sbstMdprCd: string | null;

  @Column("varchar", {
    name: "efcc_nm",
    nullable: true,
    comment: "효능명",
    length: 4000,
  })
  efccNm: string | null;

  @Column("varchar", {
    name: "iotm_dosg",
    nullable: true,
    comment: "용법용량",
    length: 4000,
  })
  iotmDosg: string | null;

  @Column("varchar", {
    name: "catn_matr",
    nullable: true,
    comment: "주의사항",
    length: 4000,
  })
  catnMatr: string | null;

  @Column("varchar", {
    name: "strg_mthd_nm",
    nullable: true,
    comment: "보관방법명",
    length: 4000,
  })
  strgMthdNm: string | null;

  @Column("varchar", {
    name: "epmt_lmtd_yn",
    nullable: true,
    comment: "임부제한여부",
    length: 1,
  })
  epmtLmtdYn: string | null;

  @Column("varchar", {
    name: "img",
    nullable: true,
    comment: "이미지",
    length: 300,
  })
  img: string | null;

  @Column("varchar", {
    name: "hsin_hsot_flud_yn",
    nullable: true,
    comment: "원내외수액여부",
    length: 1,
  })
  hsinHsotFludYn: string | null;

  @Column("varchar", {
    name: "vald_perd",
    nullable: true,
    comment: "유효기간",
    length: 8,
  })
  valdPerd: string | null;

  @Column("decimal", {
    name: "pack_qty",
    nullable: true,
    comment: "포장수량",
    precision: 15,
    scale: 3,
  })
  packQty: string | null;

  @Column("varchar", {
    name: "labl_prnt_yn",
    nullable: true,
    comment: "라벨출력여부",
    length: 1,
  })
  lablPrntYn: string | null;

  @Column("varchar", {
    name: "ingr_cd",
    nullable: true,
    comment: "성분코드",
    length: 15,
  })
  ingrCd: string | null;

  @Column("varchar", {
    name: "mdpr_uncd",
    nullable: true,
    comment: "약품단위코드",
    length: 20,
  })
  mdprUncd: string | null;

  @Column("varchar", {
    name: "pack_uncd",
    nullable: true,
    comment: "포장단위코드",
    length: 20,
  })
  packUncd: string | null;

  @Column("varchar", {
    name: "ctnt_uncd",
    nullable: true,
    comment: "함량단위코드",
    length: 20,
  })
  ctntUncd: string | null;
}
