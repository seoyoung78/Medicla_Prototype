import { Column, Entity } from "typeorm";

@Entity("csantbcdmt", { schema: "cli" })
export class Csantbcdmt {
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

  @Column("varchar", {
    primary: true,
    name: "antb_cd",
    comment: "항생제코드",
    length: 20,
  })
  antbCd: string;

  @Column("varchar", {
    name: "antb_nm",
    nullable: true,
    comment: "항생제명",
    length: 50,
  })
  antbNm: string | null;

  @Column("varchar", {
    name: "antb_abnm",
    nullable: true,
    comment: "항생제약어명",
    length: 20,
  })
  antbAbnm: string | null;

  @Column("varchar", {
    name: "sttt_yn",
    nullable: true,
    comment: "통계여부",
    length: 1,
  })
  stttYn: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;

  @Column("varchar", {
    name: "rmrk",
    nullable: true,
    comment: "비고",
    length: 100,
  })
  rmrk: string | null;
}
