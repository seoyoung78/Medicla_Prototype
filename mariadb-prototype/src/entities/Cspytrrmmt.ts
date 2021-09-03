import { Column, Entity } from "typeorm";

@Entity("cspytrrmmt", { schema: "cli" })
export class Cspytrrmmt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
  hsptCd: string;

  @Column("varchar", {
    name: "frst_rgst_usid",
    comment: "최초등록사용자ID",
    length: 20,
  })
  frstRgstUsid: string;

  @Column("datetime", { name: "frst_rgdt", comment: "최초등록일시" })
  frstRgdt: Date;

  @Column("varchar", {
    name: "last_updt_usid",
    comment: "최종수정사용자ID",
    length: 20,
  })
  lastUpdtUsid: string;

  @Column("datetime", { name: "last_uddt", comment: "최종수정일시" })
  lastUddt: Date;

  @Column("int", {
    primary: true,
    name: "trrm_sqno",
    comment: "치료실일련번호",
  })
  trrmSqno: number;

  @Column("varchar", { name: "trrm_cd", comment: "치료실코드", length: 6 })
  trrmCd: string;

  @Column("varchar", {
    name: "trrm_nm",
    nullable: true,
    comment: "치료실명",
    length: 300,
  })
  trrmNm: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;
}
