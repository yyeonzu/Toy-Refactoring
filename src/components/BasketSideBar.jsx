import React from 'react';
import styled from 'styled-components';

const BasketSideBar = ({listData, color}) => {
  return (
    <ListContainer>
      {listData.map((it, idx) => (
        <ListItem key={idx} color={color}>
          {it}
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default BasketSideBar;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -24px;
`;

const ListItem = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  background: #fff;
  color: ${(props) => (props.color ? props.color : '#999999')};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
