import React from 'react';
import styled from 'styled-components';

const StoreList = () => {
  const seoulList = [
    '가로수길',
    '강남',
    '강서 홈플러스',
    '건대',
    '노원역',
    '대학로',
    '목동',
    '서울대 입구역',
    '수유',
    '신림',
    '신촌',
    '연신내',
    '영등포',
    '이수역',
    '잠실롯데 월드타워',
    '잠실 새내역',
    '종로',
    '천호',
    '합정',
  ];

  const gyeonggiList = [
    '동탄 하나로마트',
    '동탄',
    '범계',
    '부천',
    '분당 서현',
    '분당 야탑',
    '산본',
    '수원 시청역',
    '수원',
    '수지',
    '의정부 홈플러스',
    '일산',
    '평택',
    '화정',
  ];
  const othersList = [
    '광주 상무',
    '광주 충정로',
    '김해',
    '대구 동성로',
    '대구 상인',
    '대전 시청역',
    '대전 은행',
    '동대구역',
    '마산 합정',
    '부산 경성대 부경대역',
    '부산 덕천',
    '부산 서면동보',
    '부산 서면',
    '부산 센텀',
    '울산',
    '인천 계산 홈플러스',
    '인천 구월',
    '인천\n송도',
    '인천 청라',
    '전주',
    '창원 상남',
    '천안신불당',
    '청주',
  ];

  const seoulBtnList = seoulList.map((it, idx) => <StoreBtn key={idx}>{it}점</StoreBtn>);
  const gyeonggiBtnList = gyeonggiList.map((it, idx) => <StoreBtn key={idx}>{it}점</StoreBtn>);
  const othersBtnList = othersList.map((it, idx) => <StoreBtn key={idx}>{it}점</StoreBtn>);

  return (
    <StoreListContainer>
      <HeadContainer>
        <Labels>
          <Title02>중고매장</Title02>
          <Detail01>해당 지점명을 선택하면 보유도서를 검색할 수 있습니다.</Detail01>
        </Labels>
        <KakaomapBtn>카카오맵에서 전국매장 조회하기</KakaomapBtn>
      </HeadContainer>
      <BodyContainer>
        <SemiBodyContainer>
          <StoreLocation>서울</StoreLocation>
          <StoreBtns>{seoulBtnList}</StoreBtns>
        </SemiBodyContainer>
        <SemiBodyContainer>
          <StoreLocation>경기</StoreLocation>
          <StoreBtns>{gyeonggiBtnList}</StoreBtns>
        </SemiBodyContainer>
        <SemiBodyContainer>
          <StoreLocation>광역시</StoreLocation>
          <StoreBtns>{othersBtnList}</StoreBtns>
        </SemiBodyContainer>
      </BodyContainer>
    </StoreListContainer>
  );
};

export default StoreList;

const StoreListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Labels = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title02 = styled.label`
  color: black;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Detail01 = styled.label`
  margin-top: 8px;
  color: #999;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const KakaomapBtn = styled.button`
  display: flex;
  width: 294px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #3962ad;
  background-color: #e8edf6;
  color: #3962ad;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background-color: #cee0ff;
  }
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const SemiBodyContainer = styled.div`
  display: flex;
`;

const StoreLocation = styled.div`
  display: flex;
  min-width: 86px;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 16px 16px 0;
  flex-shrink: 0;
  border-bottom: 1px solid #fafafa;
  background-color: #3962ad;
  color: #fff;
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const StoreBtns = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border: 1px solid #e8edf6;
  background-color: #fafafa;
`;
const StoreBtn = styled.button`
  display: flex;
  width: 98px;
  height: 52px;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-top: 0;
  border-right: 1px solid #e8edf6;
  border-bottom: 1px solid #e8edf6;
  border-left: 0;
  background-color: #fafafa;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-break: keep-all;
  cursor: pointer;
  &:hover {
    background-color: #cee0ff;
  }
`;
