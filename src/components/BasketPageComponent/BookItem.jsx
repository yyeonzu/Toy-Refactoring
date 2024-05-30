import React from 'react';
import styled from 'styled-components';

const BookItem = ({item}) => {
  return (
    <Book>
      <BasketImg src={item.itemImgUrl} alt={item.title} />
      <BasketInfo>
        <BasketGoodsTitle>[중고] {item.title}</BasketGoodsTitle>
        <BasketGoodsTexts>
          <GoodsAuthor>
            {item.producer}/{item.publisher}
          </GoodsAuthor>
          <GoodsRow>
            <GoodsPrice>
              가격: <ColoredText>{item.price}원</ColoredText>
            </GoodsPrice>
            <GoodsLocation>
              도서 위치: <ColoredText>{item.location}</ColoredText> (위에서부터 4번째칸)
            </GoodsLocation>
          </GoodsRow>
          <GoodsState>
            상태: <ColoredText>상</ColoredText>
          </GoodsState>
        </BasketGoodsTexts>
      </BasketInfo>
    </Book>
  );
};

export default BookItem;

const Book = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 56px;
`;

const BasketImg = styled.div`
  width: 180px;
  height: 240px;
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
  gap: 8px;
`;

const GoodsAuthor = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  height: 23px;
`;

const GoodsRow = styled.div`
  display: flex;
  gap: 48px;
`;

const GoodsLocation = styled.label`
  height: 23px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  width: 292px;
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
