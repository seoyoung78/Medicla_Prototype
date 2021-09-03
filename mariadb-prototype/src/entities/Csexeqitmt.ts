import { Column, Entity } from "typeorm";

@Entity("csexeqitmt", { schema: "cli" })
export class Csexeqitmt {
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
    name: "exmn_eqpm_cd",
    comment: "검사장비코드",
    length: 5,
  })
  exmnEqpmCd: string;

  @Column("int", {
    primary: true,
    name: "exmn_eqpm_cd_sqno",
    comment: "검사장비코드일련번호",
  })
  exmnEqpmCdSqno: number;

  @Column("varchar", {
    name: "exmn_cd",
    nullable: true,
    comment: "검사코드",
    length: 12,
  })
  exmnCd: string | null;

  @Column("varchar", {
    name: "spcm_cd",
    nullable: true,
    comment: "검체코드",
    length: 5,
  })
  spcmCd: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;
}
