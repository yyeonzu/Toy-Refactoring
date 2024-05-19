import styled from 'styled-components';

const BuyandAddBtn = () => {
  return (
    <BtnContainer>
      <BuyBtn>온라인 구매</BuyBtn>
      <AddBtn>장바구니 추가</AddBtn>
    </BtnContainer>
  );
};

export default BuyandAddBtn;

const BtnContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  gap: 24px;
`;
const Btn = styled.button`
  padding: 12px;
  border: none;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const BuyBtn = styled(Btn)`
background-color: #EA328F;
color: #fff;
`
const AddBtn = styled(Btn)`
background-color: #fff;
border: 1px solid #EA328F;
color: #EA328F;
`