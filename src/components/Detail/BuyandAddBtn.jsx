import styled from 'styled-components';
import {addtoCart} from '../../services/api/cart';

const BuyandAddBtn = ({type, data}) => {
  return (
    <BtnContainer>
      {type === 'top' ? (
        <>
          <Blank />
          <BuyBtn>온라인 구매</BuyBtn>
          <AddBtn onClick={() => addtoCart(data)}>장바구니 추가</AddBtn>
        </>
      ) : (
        <>
          <BuyBtn>온라인 구매</BuyBtn>
          <AddBtn onClick={() => addtoCart(data)}>장바구니 추가</AddBtn>
        </>
      )}
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
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const BuyBtn = styled(Btn)`
  background-color: #ea328f;
  color: #fff;
`;
const AddBtn = styled(Btn)`
  background-color: #fff;
  border: 1px solid #ea328f;
  color: #ea328f;
`;

const Blank = styled.div`
  width: 176px;
  height: 45px;
`;
