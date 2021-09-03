import {Column,Entity} from "typeorm";


@Entity("csingdrpmt_atc_2107" ,{schema:"cli" } )
export  class CsingdrpmtAtc_2107 {

@Column("varchar",{ name:"식약분류",nullable:true,comment:"TRIAL",length:3 })
식약분류:string | null;

@Column("varchar",{ name:"주성분코드",nullable:true,comment:"TRIAL",length:9 })
주성분코드:string | null;

@Column("varchar",{ name:"제품코드",nullable:true,comment:"TRIAL",length:109 })
제품코드:string | null;

@Column("varchar",{ name:"제품명",nullable:true,comment:"TRIAL",length:300 })
제품명:string | null;

@Column("varchar",{ name:"업체명",nullable:true,comment:"TRIAL",length:100 })
업체명:string | null;

@Column("varchar",{ name:"atc코드",nullable:true,comment:"TRIAL",length:7 })
atc코드:string | null;

@Column("varchar",{ name:"atc코드명칭",nullable:true,comment:"TRIAL",length:100 })
atc코드명칭:string | null;

@Column("varchar",{ name:"비고",nullable:true,comment:"TRIAL",length:1000 })
비고:string | null;

}
