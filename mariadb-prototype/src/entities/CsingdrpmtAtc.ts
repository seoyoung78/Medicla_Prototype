import {Column,Entity} from "typeorm";


@Entity("csingdrpmt_atc" ,{schema:"cli" } )
export  class Csingdrpmt_Atc {

  @Column("varchar",{ name:"업체명",nullable:true,comment:"TRIAL",length:100 })
  업체명:string | null;

  @Column("varchar",{ name:"제품명",nullable:true,comment:"TRIAL",length:200 })
  제품명:string | null;

  @Column("varchar",{ name:"품목기준코드",nullable:true,comment:"TRIAL",length:10 })
  품목기준코드:string | null;

  @Column("varchar",{ name:"대표코드",nullable:true,comment:"TRIAL",length:15 })
  대표코드:string | null;

  @Column("varchar",{ name:"표준코드",nullable:true,comment:"TRIAL",length:15 })
  표준코드:string | null;

  @Column("varchar",{ name:"코드",nullable:true,comment:"TRIAL",length:10 })
  코드:string | null;

  @Column("varchar",{ name:"명칭",nullable:true,comment:"TRIAL",length:200 })
  명칭:string | null;

}
