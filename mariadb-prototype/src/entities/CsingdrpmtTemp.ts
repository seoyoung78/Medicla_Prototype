import {Column,Entity} from "typeorm";


@Entity("csingdrpmt_temp" ,{schema:"cli" } )
export  class CsingdrpmtTemp {

@Column("char",{ name:"코드",nullable:true,comment:"TRIAL",length:9 })
코드: string | null;

@Column("varchar",{ name:"제형",nullable:true,comment:"TRIAL",length:2 })
제형: string | null;

@Column("varchar",{ name:"주성분명칭",nullable:true,comment:"TRIAL",length:200 })
주성분명칭:string | null;

@Column("varchar",{ name:"분류번호",nullable:true,comment:"TRIAL",length:3 })
분류번호:string | null;

@Column("varchar",{ name:"투여",nullable:true,comment:"TRIAL",length:2 })
투여:string | null;

@Column("varchar",{ name:"함량",nullable:true,comment:"TRIAL",length:15 })
함량:string | null;

@Column("varchar",{ name:"단위",nullable:true,comment:"TRIAL",length:100 })
단위:string | null;

}
