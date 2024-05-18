import React from 'react';
import styled from 'styled-components';
import sinchonImg from '../assets/images/BranchPage/image-sinchon.png';

const SinchonBox = () => {
  return (
    <SinchonBoxComponent>
      <StoreImage src={sinchonImg} alt="sinchonShop" />
      <SinchonDescriptBox>
        <StoreName>신촌점</StoreName>
        <StoreInfo>
          <StoreInfoText>영업시간 : 09:30 ~ 22:00</StoreInfoText>
          <StoreInfoText>정기휴일 : 설날(음력), 추석 당일</StoreInfoText>
        </StoreInfo>
        <StoreDetails>
          <StoreDetailsText>매장통합 콜센터 : 1544-2514</StoreDetailsText>
          <StoreDetailsText>주차장 : 없음</StoreDetailsText>
          <StoreDetailsText>휠체어 사용 : 매장 진입 불가능</StoreDetailsText>
          <StoreDetailsText>사용가능 지역화폐 : 제로페이</StoreDetailsText>
        </StoreDetails>
        <InfoBtns>
          <SinchonBtn>찾아오는 길</SinchonBtn>
          <SinchonBtn>매장 서가 단면도</SinchonBtn>
        </InfoBtns>
      </SinchonDescriptBox>
    </SinchonBoxComponent>
  );
};

export default SinchonBox;

const SinchonBoxComponent = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StoreImage = styled.img`
  width: 996px;
  height: 320px;
`;

const SinchonDescriptBox = styled.div`
  position: relative;
  top: -0px;
  left: -993px;
  display: flex;
  flex-direction: column;
  max-width: 202px;
  max-height: 229px;
  padding: 67px 34px 24px 16px;
  gap: 8px;
  white-space: nowrap;
`;

const StoreName = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  text-align: left;
  margin: 4px 0px;
`;

const StoreInfo = styled.div``;

const StoreInfoText = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin: 4px 0px;
`;

const StoreDetails = styled.div``;

const StoreDetailsText = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  color: #ffffff;
  margin: 4px 0px;
`;

const InfoBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const SinchonBtn = styled.button`
  min-width: 71px;
  height: 22px;
  padding: 4px 8px 4px 8px;
  gap: 8px;
  border-radius: 4px;
  background-color: #e8edf6;
  color: #3962ad;
  border: 1px solid #3962ad;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
