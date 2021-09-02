export default function CommonLine() {
  return (
    <div className="common-line">
      <div className="left">
        <input className="info" placeholder="환자 조회"></input>
        <button type="button"></button>
      </div>
      <div className="right">
        <button type="button"><img src="./imgs/reset.png" alt=""></img>초기화</button>
        <span>|</span>
        <button type="button"><img src="./imgs/patientList.png" alt=""></img>환자 현황</button>
      </div>
    </div>
  )
}