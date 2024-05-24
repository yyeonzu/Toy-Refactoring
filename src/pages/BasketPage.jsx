import React from 'react';
import styled from 'styled-components';
import BasketComponent from '../components/BasketPageComponent/BasketComponent';

const BasketPage = () => {
  return (
    <BasketMain>
      <BasketTitle>쇼핑 목록</BasketTitle>
      <BasketHead>
        <BasketText>
          본 목록은 중고매장 이용 시 '프린트 출력'을 위한 임시보관 기능입니다. 로그인 저장이 안되며, PC/모바일 웹에서
          재확인할 수 없으니 유의하세요. 로그인하여 개인별 구매 WISH LIST에 저장을 원하시는 경우에는 '온라인 중고샵'
          또는 새 상품의 '보관함 담기' 기능을 이용해주시기 바랍니다.
        </BasketText>
      </BasketHead>
      <BasketBody>
        <BasketList>
          <BasketComponent />
        </BasketList>
      </BasketBody>
    </BasketMain>
  );
};

export default BasketPage;

const BasketMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 111px 277px 130px;
`;

const BasketHead = styled.div``;

const BasketTitle = styled.div`
  width: 151px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  padding: 14px 0 14px 16px;
  display: flex;
`;

const BasketText = styled.p`
  color: rgba(0, 0, 0, 0.65);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  padding: 14px 0 33px 9px;
  margin: 0;
  width: 1114px;
`;

const BasketBody = styled.div`
  width: 1199px;
  height: 1743px;
  flex-shrink: 0;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const BasketList = styled.div`
  padding: 100px;
`;
