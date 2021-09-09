import { useRecoilValue } from "recoil";
import { patientState } from "../../atoms/Recoils_진료";

function PatientDetail() {
  const patient = useRecoilValue(patientState);

  return (
    <div className="section">
      <div className="panel shadow fx1">
        <div>
          <img src="./imgs/patient_empty.png" alt=""></img>
          <span>환자 정보</span>
        </div>
        <hr/>
        <div className="">
          {patient.pid === '' ?
            <div>
              <div>no.</div>
              <div>선택된 환자가 없습니다.</div>
            </div>
          :
            <div>
              <div>no.{patient.pid}              
                <div>{patient.pt_nm} {patient.sex_cd} / 세 {patient.dobr}</div>
              </div>
              <hr/>
              <div>
                <div>
                  <div>보험구분: 건보</div>
                  <div>진료구분: 초진</div>
                </div>
                <div>
                  <div>보조유형: 건강보험</div>
                  <div>내원경로: 지인추천</div>
                </div>
              </div>
            </div>
          }
          
        </div>
      </div>
    </div>
  ) 
}

export default PatientDetail;