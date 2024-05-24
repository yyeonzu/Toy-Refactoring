import React from 'react';
import styled from 'styled-components';
import GoodsComponent from './GoodsComponent';
import bookImg1 from '../../assets/images/BranchPage/goods-component/book1.png';
import bookImg2 from '../../assets/images/BranchPage/goods-component/book2.png';
import bookImg3 from '../../assets/images/BranchPage/goods-component/book3.png';
import bookImg4 from '../../assets/images/BranchPage/goods-component/book4.png';

const BooksList = () => {
  return (
    <UsedBooksList>
      <GoodsField>중고도서</GoodsField>
      <UsedBooksComponent>
        <GoodsComponent
          productImg={bookImg1}
          productTitle="트렌드 코리아 2024"
          productPrice="8,700원"
          productDC="54% 할인"
        />
        <GoodsComponent
          productImg={bookImg2}
          productTitle="남에게 보여주려고 인생을 낭비하지 마라"
          productPrice="12,300원"
          productDC="30% 할인"
        />
        <GoodsComponent
          productImg={bookImg3}
          productTitle="곰돌이 푸, 행복한 일은 매일 있어 (한정판 벚꽃 에디션)"
          productPrice="7,800원"
          productDC="35% 할인"
        />
        <GoodsComponent
          productImg={bookImg4}
          productTitle="사랑하라 한번도 상처 받지 않은 것처럼"
          productPrice="3,800원"
          productDC="62% 할인"
        />
      </UsedBooksComponent>
    </UsedBooksList>
  );
};

export default BooksList;

const UsedBooksList = styled.div`
  gap: 16px;
`;

const GoodsField = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 39px;
  margin: 0px 0px;
`;

const UsedBooksComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
