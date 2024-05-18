import React from 'react';
import styled from 'styled-components';

const BasketComponent = () => {
  return (
    <BasketGoods>
      <BasketImg></BasketImg>
      <BasketInfo>
        <BasketGoodsTitle>[중고] 도서 제목</BasketGoodsTitle>
        <BasketGoodsTexts>
          <GoodsAuthor>출판사/지은이</GoodsAuthor>
          <GoodsRow>
            <GoodsPrice>
              가격: <ColoredText>7000원</ColoredText>
            </GoodsPrice>
            <GoodsLocation>
              도서 위치: <ColoredText>A17</ColoredText> (위에서부터 4번째칸)
            </GoodsLocation>
          </GoodsRow>
          <GoodsState>
            상태: <ColoredText>상</ColoredText>
          </GoodsState>
        </BasketGoodsTexts>
      </BasketInfo>
      <BasketBtns>
        <PrintBtn>출력하기</PrintBtn>
        <DeleteBtn>삭제하기</DeleteBtn>
      </BasketBtns>
    </BasketGoods>
  );
};

export default BasketComponent;

const BasketGoods = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding-bottom: 56px;
`;

const BasketImg = styled.div`
  width: 180px;
  height: 240px;
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

const BasketBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding-left: 257px;
`;

const PrintBtn = styled.button`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #3962ad;
  background: #e8edf6;
`;

const DeleteBtn = styled(PrintBtn)`
  border: 1px solid #010101;
  background: #fff;
`;
