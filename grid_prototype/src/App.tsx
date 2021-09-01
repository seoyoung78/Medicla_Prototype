import React from 'react';
import './App.css';
import Header from './components/공통/Header';
import Gnb from './components/공통/Gnb';
import SubHeader from './components/공통/SubHeader';
import './init';
import CommonLine from './components/공통/CommonLine';

function App() {
  return (
    <div className="his">
      <Gnb/>
      <Header/>
      <div className="container">
        <SubHeader/>
        <CommonLine/>
        <div className="his-content">

        </div>
      </div>
    </div>
  );
}

export default App;