import axios from "axios";

// API_URL 설정
const API_URL = "http://localhost:4000/medical";

// 정보 조회
// 처방마스터 기록 가져오기
export const getAll = async () => {
  let list = await axios.get(API_URL);
  return list.data;
};

// 환자 목록
export const getSearchPatient = async (keyword) => {
  let list = await axios.get(API_URL + '/' + keyword);
  return list.data;
}