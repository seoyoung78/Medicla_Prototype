import { Column, Entity } from "typeorm";

@Entity("mdocccodemt", { schema: "cli" })
export class Mdocccodemt {
  @Column("varchar", {
    name: "CC_CD",
    nullable: true,
    comment: "주호소코드",
    length: 15,
  })
  ccCd: string | null;

  @Column("varchar", {
    name: "CC_NM",
    nullable: true,
    comment: "주호소명",
    length: 250,
  })
  ccNm: string | null;

  @Column("varchar", {
    name: "DEL_YN",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;

  @Column("varchar", {
    name: "LAST_UPDT_USID",
    nullable: true,
    comment: "최종수정사용자ID",
    length: 20,
  })
  lastUpdtUsid: string | null;

  @Column("timestamp", {
    name: "LAST_UDDT",
    comment: "최종수정일시",
    default: () => "'current_timestamp(6)'",
  })
  lastUddt: Date;

  @Column("varchar", {
    name: "FRST_RGST_USID",
    nullable: true,
    comment: "최초등록사용자ID",
    length: 15,
  })
  frstRgstUsid: string | null;

  @Column("timestamp", {
    name: "FRST_RGDTNO",
    comment: "최초등록일시",
    default: () => "'current_timestamp(6)'",
  })
  frstRgdtno: Date;

  @Column("varchar", {
    name: "HSPT_CD",
    nullable: true,
    comment: "병원코드",
    length: 20,
  })
  hsptCd: string | null;
}
