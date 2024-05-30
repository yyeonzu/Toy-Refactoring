import React from 'react';
import styled from 'styled-components';
import BookComponent from './BookComponent';

const BooksList = () => {
  return (
    <UsedBooksList>
      <GoodsField>중고도서</GoodsField>
      <UsedBooksComponent>
        <BookComponent is_domestic="2" category="1" topic="3" />
        <BookComponent is_domestic="1" category="1" topic="1" />
        <BookComponent is_domestic="1" category="1" topic="4" />
        <BookComponent is_domestic="1" category="1" topic="3" />
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
  align-items: flex-end;
`;
