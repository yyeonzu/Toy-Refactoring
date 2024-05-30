import React from 'react';
import styled from 'styled-components';

const GoodsComponent = ({productImg, productTitle, productPrice, productDC, onClick}) => {
  return (
    <Goods onClick={onClick}>
      <GoodsImg src={productImg} alt="상품 이미지" hasDC={!!productDC} />
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
  cursor: pointer;
  height: ${(props) => (props.hasDC ? 'auto' : '150px')};
  object-fit: cover;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
`;

const GoodsTitle = styled.p`
  max-width: 150px;
  max-height: 38px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  overflow: hidden;
  text-overflow: clip;
  margin-bottom: 0px;
  margin-top: 8px;
  cursor: pointer;
`;

const GoodsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`;

const GoodsPrice = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #ea328f;
  margin-top: 8px;
  margin-bottom: 0px;
`;

const GoodsDC = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  margin-top: 8px;
  margin-bottom: 0px;
`;
