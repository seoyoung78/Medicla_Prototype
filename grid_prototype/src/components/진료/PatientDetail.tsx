function PatientDetail() {
  return (
    <div className="section">
      <div className="panel shadow fx1">
        <div>
          <img src="./imgs/patient_empty.png" alt=""></img>
          <span>환자 정보</span>
        </div>
        <div className="">
          <div>no.</div>
          <div>선택된 환자가 없습니다.</div>
        </div>
      </div>
    </div>
  ) 
}

export default PatientDetail;