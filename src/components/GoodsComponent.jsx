import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const GoodsComponent = ({productImg, productTitle, productPrice, productDC}) => {
  return (
    <Goods>
      <GoodsImg src={productImg} alt="상품 이미지" />
      <TitleSection>
        <GoodsTitle>{productTitle}</GoodsTitle>
      </TitleSection>
      <GoodsInfo>
        <GoodsPrice>{productPrice}</GoodsPrice>
        <GoodsDC>{productDC}</GoodsDC>
      </GoodsInfo>
    </Goods>
  );
};

export default GoodsComponent;

const Goods = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`;

const GoodsImg = styled.img`
  width: 150px;
  display: flex;
  align-items: flex-start;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
`;

const GoodsTitle = styled.p`
  max-width: 146px;
  max-height: 38px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  overflow: hidden;
  text-overflow: clip;
  margin-bottom: 0px;
  margin-top: 10px;
`;

const GoodsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const GoodsPrice = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #ea328f;
  margin-top: 8px;
`;

const GoodsDC = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  margin-top: 8px;
`;
