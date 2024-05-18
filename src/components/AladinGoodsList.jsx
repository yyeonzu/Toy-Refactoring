import React from 'react';
import styled from 'styled-components';
import GoodsComponent from './GoodsComponent';
import aladinImg1 from '../assets/images/BranchPage/goods-component/aladin1.png';
import aladinImg2 from '../assets/images/BranchPage/goods-component/aladin2.png';
import aladinImg3 from '../assets/images/BranchPage/goods-component/aladin3.png';
import aladinImg4 from '../assets/images/BranchPage/goods-component/aladin4.png';

const AladinGoodsList = () => {
  return (
    <UsedBooksList>
      <GoodsField>알라딘 굿즈</GoodsField>
      <UsedBooksComponent>
        <GoodsComponent productImg={aladinImg1} productTitle="피너츠 보냉파우치 & 토트백" productPrice="17,800원" />
        <GoodsComponent
          productImg={aladinImg2}
          productTitle="[김이랑 × 알라딘] 술잔 세트 (2개입)"
          productPrice="11,800원"
        />
        <GoodsComponent productImg={aladinImg3} productTitle="빤쮸토끼 얼굴 파우치 키링" productPrice="8,500원" />
        <GoodsComponent productImg={aladinImg4} productTitle="빤쮸토끼 키링" productPrice="10,000원" />
      </UsedBooksComponent>
    </UsedBooksList>
  );
};

export default AladinGoodsList;

const UsedBooksList = styled.div`
  gap: 16px;
`;

const GoodsField = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
`;

const UsedBooksComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
