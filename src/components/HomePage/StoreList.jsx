import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {storelist} from '../../services/storelist.js';

const StoreList = () => {
  const seoulList = storelist.seoulList;
  const gyeonggiList = storelist.gyeonggiList;
  const othersList = storelist.othersList;

  const navigate = useNavigate();

  const handleGoBranch = () => {
    navigate('/branch/sinchon');
  };

  const goKakaoMap = () => {
    window.open(
      'https://m.map.kakao.com/actions/searchView?q=%EC%95%8C%EB%9D%BC%EB%94%98%EC%A4%91%EA%B3%A0%EC%84%9C%EC%A0%90&wxEnc=LWQQTM&wyEnc=QNLULSS&lvl=4#!/all/map/place'
    );
  };

  const seoulBtnList = seoulList.map((it, idx) => (
    <StoreBtn key={idx} onClick={handleGoBranch}>
      {it}점
    </StoreBtn>
  ));
  const gyeonggiBtnList = gyeonggiList.map((it, idx) => <StoreBtn key={idx}>{it}점</StoreBtn>);
  const othersBtnList = othersList.map((it, idx) => <StoreBtn key={idx}>{it}점</StoreBtn>);

  return (
    <StoreListContainer>
      <HeadContainer>
        <Labels>
          <Title02>중고매장</Title02>
          <Detail01>해당 지점명을 선택하면 보유도서를 검색할 수 있습니다.</Detail01>
        </Labels>
        <KakaomapBtn onClick={goKakaoMap}>카카오맵에서 전국매장 조회하기</KakaomapBtn>
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
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Detail01 = styled.label`
  margin-top: 8px;
  color: #999;
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
  font-family: Pretendard;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-break: keep-all;
  white-space: break-spaces;
  cursor: pointer;
  &:hover {
    background-color: #cee0ff;
  }
`;
