import React from 'react';
import styled from 'styled-components';

const RightSideLongSquareBtn = ({text, color}) => {
  return (
    <BtnContainer color={color}>
      <Label>{text}</Label>
      <EtcBtn>
        더보기
        <img src={require('../../assets/images/HomePage/icon-open.png')} alt="btn" />
      </EtcBtn>
    </BtnContainer>
  );
};

export default RightSideLongSquareBtn;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  background-color: ${(props) => (props.color ? props.color : '#fff')};
`;
const Label = styled.label`
  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EtcBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
  }
`;
