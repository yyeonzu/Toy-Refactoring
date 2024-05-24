import React from 'react';
import styled from 'styled-components';

const GoodsItem = () => {
  return (
    <Goods>
      <BasketImg />
      <BasketInfo>
        <BasketGoodsTitle>상품명</BasketGoodsTitle>
        <BasketGoodsTexts>
          <GoodsAuthor>상품정보</GoodsAuthor>
          <GoodsLocation>
            상품 위치: <ColoredText>A17</ColoredText> (위에서부터 4번째칸)
          </GoodsLocation>
          <GoodsPrice>
            판매가: <ColoredText>7000원</ColoredText>
          </GoodsPrice>
        </BasketGoodsTexts>
      </BasketInfo>
    </Goods>
  );
};

export default GoodsItem;

const Goods = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 56px;
`;

const BasketImg = styled.div`
  width: 180px;
  height: 180px;
  background: #d9d9d9;
`;

const BasketInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 24px;
`;

const BasketGoodsTitle = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  height: 31px;
  padding-bottom: 16px;
`;

const BasketGoodsTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoodsAuthor = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 17px;
`;

const GoodsLocation = styled.label`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  width: 292px;
  padding-bottom: 15px;
`;

const GoodsPrice = styled(GoodsLocation)`
  width: 126px;
`;

const GoodsState = styled(GoodsLocation)`
  font-weight: 700;
`;

const ColoredText = styled(GoodsState)`
  color: #ea328f;
`;
