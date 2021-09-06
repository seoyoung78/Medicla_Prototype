import { ValueType } from "realgrid";

// 신체사정
export const physicalReviewList = {
  name: 'physicalReviewList',
  fields: [
    {
      fieldName: 'regdate',
      dataType: ValueType.TEXT
    },
    {
      fieldName: 'max',
      dataType: ValueType.NUMBER
    },
    {
      fieldName: 'min',
      dataType: ValueType.NUMBER
    },
    {
      fieldName: 'pulse',
      dataType: ValueType.NUMBER
    },
    {
      fieldName: 'respiration',
      dataType: ValueType.NUMBER
    },
    {
      fieldName: 'tempurature',
      dataType: ValueType.NUMBER
    },
    {
      fieldName: 'bloodSugar',
      dataType: ValueType.NUMBER
    },
    {
      fieldName: 'height',
      dataType: ValueType.NUMBER
    },
  ],
  columns: [
    {
      fieldName: 'regdate',
      width: '100',
      header: '입력일시',
      edtiable: false
    },
    {
      fieldName: 'max',
      width: '100',
      header: '수축기 혈압',
      edtiable: false
    },
    {
      fieldName: 'min',
      width: '100',
      header: '이완기 혈압',
      edtiable: false
    },
    {
      fieldName: 'pulse',
      width: '100',
      header: '맥박',
      edtiable: false
    },
    {
      fieldName: 'respiration',
      width: '100',
      header: '호흡',
      edtiable: false
    },
    {
      fieldName: 'tempurature',
      width: '100',
      header: '체온',
      edtiable: false
    },
    {
      fieldName: 'bloodSugar',
      width: '100',
      header: '혈당',
      edtiable: false
    },
    {
      fieldName: 'height',
      width: '100',
      header: '신장',
      edtiable: false
    },
  ]
}

// 진단
export const diagnosisList = {
  name: 'diagnosisList',
  fields: [
    {
      fieldName: 'id',
      dataType: ValueType.TEXT
    },
    {
      fieldName: 'name',
      dataType: ValueType.TEXT
    },
    {
      fieldName: 'form',
      dataType: ValueType.TEXT
    },
    {
      fieldName: 'part',
      dataType: ValueType.TEXT
    },
    {
      fieldName: 'mark',
      dataType: ValueType.TEXT
    }
  ],
  columns: [
    {
      name: 'id',
      fieldName: 'id',
      width: '100',
      header: '진단코드',
      editable: false
    },
    {
      name: 'name',
      fieldName: 'name',
      width: '500',
      header: '진단명',
      editable: false
    },
    {
      name: 'form',
      fieldName: 'form',
      width: '100',
      header: '형태',
      editable: false
    },
    {
      name: 'mark',
      fieldName: 'mark',
      width: '100',
      header: '특정 기호',
      editable: false
    },
  ]
}

// 처방
export const prescriptionList = {
  name: 'prescriptionList',
  fields: [
    {
      fieldName: 'Id',
      dataType: ValueType.TEXT
    },
    {
      fieldName: 'Name',
      dataType: ValueType.TEXT
    },
    {
      fieldName: 'Dose',
      dataType: ValueType.NUMBER
    },
    {
      fieldName: 'Count',
      dataType: ValueType.NUMBER
    },
    {
      fieldName: 'Date',
      dataType: ValueType.NUMBER
    },
    {
      fieldName: 'Method',
      dataType: ValueType.TEXT
    },
    {
      fieldName: 'Insurance',
      dataType: ValueType.TEXT
    },
    {
      fieldName: 'Side',
      dataType: ValueType.TEXT
    },
  ],
  columns: [
    {
      fieldName: 'Id',
      width: '100',
      header: '처방코드',
      editable: false
    },
    {
      fieldName: 'Name',
      width: '100',
      header: '처방명',
      editable: false
    },
    {
      fieldName: 'Dose',
      width: '30',
      header: '1회량',
      editable: false
    },
    {
      fieldName: 'Count',
      width: '30',
      header: '횟수',
      editable: false
    },
    {
      fieldName: 'Date',
      width: '30',
      header: '일수',
      editable: false
    },
    {
      fieldName: 'Method',
      width: '40',
      header: '용법',
      editable: false
    },
    {
      fieldName: 'Insurance',
      width: '50',
      header: '급여',
      editable: false
    },
    {
      fieldName: 'Side',
      width: '50',
      header: '원외',
      editable: false
    },
  ]
}