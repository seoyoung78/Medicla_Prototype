// 진단
export const diagnosisList = {
  name: 'diagnosisList',
  fields: [
    {
      fieldName: 'id'
    },
    {
      fieldName: 'name'
    },
    {
      fieldName: 'form'
    },
    {
      fieldName: 'part'
    },
    {
      fieldName: 'mark'
    }
  ],
  colums: [
    {
      fieldName: 'id',
      width: '100',
      header: '진단코드',
      editable: false
    },
    {
      fieldName: 'name',
      width: '500',
      header: '진단명',
      editable: false
    },
    {
      fieldName: 'form',
      width: '100',
      header: '형태',
      editable: false
    },
    {
      fieldName: 'mark',
      width: '100',
      header: '특정 기호',
      editable: false
    },
  ]
}

// 처방
export const treatmentList = {
  name: 'treatmentList',
  fields: [
    {
      fieldName: 'treatmentId'
    },
    {
      fieldName: 'treatmentName'
    },
    {
      fieldName: 'treatmentDose'
    },
    {
      fieldName: 'treatmentCount'
    },
    {
      fieldName: 'treatmentDate'
    },
    {
      fieldName: 'treatmentMethod'
    },
    {
      fieldName: 'treatmentInsurrance'
    },
    {
      fieldName: 'treatmentSide'
    },
    {
      fieldName: 'treatmentExcept'
    },
    {
      fieldName: 'treatmentConculate'
    },
    {
      fieldName: 'treatmentSample'
    }
  ],
  columns: [
    {
      fieldName: 'treatmentId',
      width: '100',
      header: '처방코드',
      editable: false
    },
    {
      fieldName: 'treatmentName',
      width: '100',
      header: '처방명',
      editable: false
    },
    {
      fieldName: 'treatmentDose',
      width: '30',
      header: '1회량',
      editable: false
    },
    {
      fieldName: 'treatmentCount',
      width: '30',
      header: '횟수',
      editable: false
    },
    {
      fieldName: 'treatmentDate',
      width: '30',
      header: '일수',
      editable: false
    },
    {
      fieldName: 'treatmentMethod',
      width: '40',
      header: '용법',
      editable: false
    },
    {
      fieldName: 'treatmentInsurrance',
      width: '50',
      header: '급여',
      editable: false
    },
    {
      fieldName: 'treatmentSide',
      width: '50',
      header: '원외',
      editable: false
    },
    {
      fieldName: 'treatmentExcept',
      width: '50',
      header: '예외',
      editable: false
    },
    {
      fieldName: 'treatmentConculate',
      width: '50',
      header: '산정',
      editable: false
    },
    {
      fieldName: 'treatmentSample',
      width: '50',
      header: '검체',
      editable: false
    }
  ]
}