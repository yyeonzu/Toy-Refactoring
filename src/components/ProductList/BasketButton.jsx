import React from 'react';
import styled from 'styled-components';

// 장바구니 api 사용
const BasketButton = () => {
  return <Button>장바구니 추가</Button>;
};

const Button = styled.button`
  background-color: #e8edf6;
  color: #3962ad;
  border: solid 1px #3962ad;
  border-radius: 4px;

  padding: 6px;
  margin: 4px;

  white-space: nowrap;
  cursor: pointer;
`;

export default BasketButton;
