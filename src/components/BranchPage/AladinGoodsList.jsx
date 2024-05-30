import React from 'react';
import styled from 'styled-components';
import AladinGoodsComponent from './AladinGoodsComponent';

const AladinGoodsList = () => {
  return (
    <AladinList>
      <GoodsField>알라딘 굿즈</GoodsField>
      <AladinComponent>
        <AladinGoodsComponent />
      </AladinComponent>
    </AladinList>
  );
};

export default AladinGoodsList;

const AladinList = styled.div`
  gap: 16px;
  padding-top: 64px;
`;

const GoodsField = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 16px;
  margin: 0px 0px;
`;

const AladinComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
