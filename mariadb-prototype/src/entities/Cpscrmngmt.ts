import { Column, Entity } from "typeorm";

@Entity("cpscrmngmt", { schema: "cli" })
export class Cpscrmngmt {
  @Column("varchar", {
    name: "hspt_cd",
    nullable: true,
    comment: "병원코드",
    length: 13,
  })
  hsptCd: string | null;

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
    name: "scrn_id",
    comment: "화면아이디",
    length: 10,
  })
  scrnId: string;

  @Column("varchar", {
    name: "scrn_type_cd",
    nullable: true,
    comment: "화면타입코드",
    length: 20,
  })
  scrnTypeCd: string | null;

  @Column("varchar", {
    name: "scrn_class",
    nullable: true,
    comment: "화면클래스",
    length: 256,
  })
  scrnClass: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;

  @Column("varchar", {
    name: "scrn_nm",
    nullable: true,
    comment: "화면명",
    length: 200,
  })
  scrnNm: string | null;

  @Column("varchar", { name: "fix_yn", comment: "고정여부", length: 1 })
  fixYn: string;

  @Column("int", { name: "wdth", comment: "넓이" })
  wdth: number;

  @Column("int", { name: "hght", comment: "높이" })
  hght: number;

  @Column("varchar", {
    name: "mngm_scrn_yn",
    comment: "관리화면여부",
    length: 1,
  })
  mngmScrnYn: string;

  @Column("varchar", {
    name: "pt_info_yn",
    nullable: true,
    comment: "환자정보여부",
    length: 1,
  })
  ptInfoYn: string | null;

  @Column("varchar", {
    name: "accs_all_yn",
    nullable: true,
    comment: "전체접근여부",
    length: 1,
  })
  accsAllYn: string | null;

  @Column("varchar", {
    name: "sbst_scrn_id",
    nullable: true,
    comment: "대체화면아이디",
    length: 10,
  })
  sbstScrnId: string | null;
}
