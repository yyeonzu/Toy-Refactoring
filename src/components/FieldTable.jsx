import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const FieldTable = () => {
  const domesticBooks = [
    '건강/취미',
    '경제경영',
    '고전',
    '과학',
    '대학교재/전문서적',
    '만화',
    '달력/기타',
    '사회과학',
    '소설/시/희곡',
    '수험서/자격증',
    '어린이',
    '에세이',
  ];
  const foreignBooks = [
    '가정/원예/인테리어',
    '가족/관계',
    '건강/스포츠',
    '건축/디자인',
    '공예/취미/수집',
    '교육/자료',
    '기술공학',
    '달력/다이어리/연감',
    '법률',
    '소설/시/희곡',
    '경제경영',
    '만화',
  ];
  const musicAlbums = [
    '가요',
    '국악',
    '월드뮤직',
    '재즈',
    '종교/명상/기타',
    '클래식',
    '팝',
    '해외구매',
    'J-pop',
    'LP',
    'O.S.T',
  ];

  const [currentField, setCurrentField] = useState('domestic');

  const handleField = (field) => {
    setCurrentField(field);
  };

  const getTableData = (field) => {
    let tableData;
    if (currentField === 'domestic') tableData = domesticBooks;
    else if (currentField === 'foreign') tableData = foreignBooks;
    else if (currentField === 'albums') tableData = musicAlbums;

    return tableData.map((field, index) => (
      <TableRow key={index}>
        <FieldBtn>{field}</FieldBtn>
        {(currentField === 'foreign' ? (index + 1) % 4 === 0 : (index + 1) % 5 === 0) && (
          <HorizonLine currentField={currentField} />
        )}
      </TableRow>
    ));
  };

  return (
    <FieldComponent>
      <Title>분야별 보기</Title>
      <TableComponent>
        <TableTitles>
          <FieldName onClick={() => handleField('domestic')} isActive={currentField === 'domestic'}>
            국내도서
          </FieldName>
          <FieldName onClick={() => handleField('foreign')} isActive={currentField === 'foreign'}>
            외국도서
          </FieldName>
          <FieldName onClick={() => handleField('albums')} isActive={currentField === 'albums'}>
            음반·비디오
          </FieldName>
        </TableTitles>
        <TableBody currentField={currentField}>{getTableData(currentField)}</TableBody>
      </TableComponent>
    </FieldComponent>
  );
};

export default FieldTable;

const FieldComponent = styled.div`
  width: 690px;
  height: 220px;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 16px;
`;

const TableComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 690px;
  height: 180px;
  border: 1px solid #9cb1d6;
  border-bottom: none;
`;

const TableTitles = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #90a8d1;
  background-color: #e8edf6;
`;

const FieldName = styled.div`
  font-family: Pretendard;
  color: #3962ad;
  border-bottom: 1px solid #90a8d1;
  width: 78px;
  height: 60px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      background-color: #3962ad;
      color: white;
    `}
`;

const TableBody = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 25px;
  background: #ffffff;
  border-bottom: 1px solid #90a8d1;
  padding-left: 30px;
  padding-right: 30px;
  ${(props) =>
    props.currentField === 'foreign' &&
    css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    `}
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const FieldBtn = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  white-space: nowrap;
`;

const HorizonLine = styled.div`
  width: 560px;
  height: 1px;
  background-color: #e9e9e9;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;
