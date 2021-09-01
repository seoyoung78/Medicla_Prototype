import { useRecoilValue } from "recoil";
import { selectedPatState } from "../../atoms/Recoils_진단검사";
import { wtPatLstConst } from "../../utils/constants";
import { dateStrToDashFormat } from "../../utils/util";

const style = {
  patInfo: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    borderRadius: "10px",
    //boxSizing: "border-box",
    border: "1px solid #E3E6EC",
    marginBottom: "20px",
    minWidth: "750px"
  },
  patInfoItem: {
    padding: "10px 20px",
    marginRight: "20px"
  },
  patInfoItemFirstChild: {
    padding: "10px 20px",
    backgroundColor: "#F6F8FA",
    borderTopLeftRadius: "7px",
    borderBottomLeftRadius: "7px",
    height: "100%"
  },
  patInfoItemLabel: {
    fontSize: "12px",
    color: "gray"
  },
  patInfoItemText: {
    fontSize: "14px"
  },
  title: {
    marginBottom: "10px"
  }
};

export default function PatInfo() {
  const data = useRecoilValue(selectedPatState);

  return (
    <>
      <h4 style={style.title}>환자정보</h4>
      <div style={style.patInfo}>
        <div style={style.patInfoItemFirstChild}>
          <label style={style.patInfoItemLabel}>
            no.{data ? data[wtPatLstConst.field.PID] : ""}
          </label>
          <div style={style.patInfoItemText}>
            {data ? data[wtPatLstConst.field.PT_NM] : "정보없음"}{" "}
            {data
              ? `${data[wtPatLstConst.field.SEX_CD]}/${
                  data[wtPatLstConst.field.AGE]
                }`
              : "N/A"}
          </div>
        </div>
        <div style={style.patInfoItem}>
          <label style={style.patInfoItemLabel}>생년월일</label>
          <div style={style.patInfoItemText}>
            {data ? dateStrToDashFormat(data[wtPatLstConst.field.DOBR]) : "-"}
          </div>
        </div>
        <div style={style.patInfoItem}>
          <label style={style.patInfoItemLabel}>접수일자</label>
          <div style={style.patInfoItemText}>
            {data ? data[wtPatLstConst.field.RCPN_DT] : "-"}
          </div>
        </div>
        <div style={style.patInfoItem}>
          <label style={style.patInfoItemLabel}>접수진료과</label>
          <div style={style.patInfoItemText}>
            {data ? data[wtPatLstConst.field.MDDP_CD] : "-"}
          </div>
        </div>
        <div style={style.patInfoItem}>
          <label style={style.patInfoItemLabel}>진료의</label>
          <div style={style.patInfoItemText}>
            {data ? data[wtPatLstConst.field.MDCR_DR_ID] : "-"}
          </div>
        </div>
        <div style={style.patInfoItem}>
          <label style={style.patInfoItemLabel}>보험구분</label>
          <div style={style.patInfoItemText}>
            {data ? data[wtPatLstConst.field.INSN_TYCD] : "-"}
          </div>
        </div>
      </div>
    </>
  );
}