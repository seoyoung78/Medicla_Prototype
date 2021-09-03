import { Column, Entity } from "typeorm";

@Entity("csexcdspmt", { schema: "cli" })
export class Csexcdspmt {
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
    name: "prsc_cd",
    comment: "처방코드",
    length: 12,
  })
  prscCd: string;

  @Column("varchar", {
    primary: true,
    name: "spcm_cd",
    comment: "검체코드",
    length: 5,
  })
  spcmCd: string;

  @Column("varchar", {
    name: "exmn_cd",
    nullable: true,
    comment: "검사코드",
    length: 12,
  })
  exmnCd: string | null;

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
    name: "basc_spcm_yn",
    nullable: true,
    comment: "기본검체여부",
    length: 1,
  })
  bascSpcmYn: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;

  @Column("varchar", {
    name: "suga_cd",
    nullable: true,
    comment: "수가코드",
    length: 12,
  })
  sugaCd: string | null;
}
