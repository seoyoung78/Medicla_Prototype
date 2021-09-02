import React from 'react';
import './App.css';
import Header from './components/공통/Header';
import Gnb from './components/공통/Gnb';
import SubHeader from './components/공통/SubHeader';
import './init';
import CommonLine from './components/공통/CommonLine';
import PatientDetail from './components/진료/PatientDetail';
import MedicalMemo from './components/진료/MedicalMemo';
import AcceptMemo from './components/진료/AcceptMemo';
import PhysicalReview from './components/진료/PhysicalReview';
import InspectionResult from './components/진료/InspectionResult';
import PrescriptionInquiry from './components/진료/PrescriptionInquiry';
import ProgressNote from './components/진료/ProgressNote';
import Diagnosis from './components/진료/Diagnosis';
import Prescription from './components/진료/Prescription';

function App() {
  return (
    <div className="his">
      <Gnb/>
      <Header/>
      <div className="container">
        <SubHeader/>
        <CommonLine/>
        <div className="his-content">
          <div className="section-wrap">
            <div className="col">
              <div className="fr4">
                {/* 환자정보, 진료메모, 접수메모, 신체사정 */}
                <PatientDetail/>
                <div className="col pd0 fx1">
                  <MedicalMemo/>
                  <AcceptMemo/>
                </div>
                <PhysicalReview/>
              </div>
              <div className="fr4">
                {/* 검사결과, 처방조회 */}
                <InspectionResult/>
                <PrescriptionInquiry/>
              </div>
              <div className="box fr4">
                {/* 경과기록, 진단, 처방, 보류/완료 버튼 */}
                <ProgressNote/>
                <Diagnosis/>
                <Prescription/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;