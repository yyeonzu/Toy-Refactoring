import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {Classification} from './Classification';
import SortingBar from './SortingBar';
import {BookInfoItem, GoodsInfoItem, RecordInfoItem} from '../ProductInfo/ProductInfo';
import Pagination from './Pagination';
import BasketButton from './BasketButton';
import {useNavigate, useLocation} from 'react-router-dom';
import {getSearch} from '../../services/api/search';

const NoResult = ({word}) => {
  return (
    <NoResultContainer>
      <Message>
        <Highlight>'{word}' </Highlight>에 대한 검색 결과가 없습니다.
      </Message>
      <Instructions>
        <Instruction>입력한 검색어의 철자 또는 띄어쓰기가 정확한지 다시 한번 확인해 주세요.</Instruction>
        <Instruction>검색어의 단어 수를 줄이거나, 보다 일반적인 검색어를 사용하여 검색해 보세요.</Instruction>
      </Instructions>
    </NoResultContainer>
  );
};

const SearchResultList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const word = searchParams.get('word');
  // default 카테고리: 가요
  const [resultlist, setResultlist] = useState([]);
  const [records, setRecords] = useState([]);
  const [books, setBooks] = useState([]);
  const [goods, setGoods] = useState([]);

  // currentPage 상태
  const [currentPage, setCurrentPage] = useState(1);

  // 한 페이지에 보여줄 product 개수
  const itemsPerPage = 4;
  const totalPages = Math.ceil(resultlist.length / itemsPerPage);

  //   // 현재 페이지에 해당하는 책 목록 계산
  const currentList = resultlist.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    if (word === '') return;
    getSearch(word).then((list) => {
      setBooks(list.bookList);
      setGoods(list.goodsList);
      setRecords(list.recordList);
      const tmp = [...list.bookList, ...list.goodsList, ...list.recordList];
      setResultlist(tmp);
    });
  }, [word]);

  const navigate = useNavigate();
  const handleItemClick = (id, type) => {
    navigate(`/details/${id}?type=${type}`);
  };

  return (
    <>
      <Container>
        <RightContainer>
          {resultlist.length === 0 && <NoResult word={word} />}
          {resultlist.length != 0 && (
            <>
              <SortingBar length={resultlist.length} />
              <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </>
          )}
          <div>
            {books.map((book, index) => (
              <RecordContainer key={book.id}>
                <div onClick={() => handleItemClick(book.id, 'book')} style={{cursor: 'pointer'}}>
                  <BookInfoItem key={book.id} booklist={book} />
                </div>
                <ButtonContainer>
                  <BasketButton onClick={() => console.log('basket')} />
                  <Button>서가위치 보기</Button>
                </ButtonContainer>
              </RecordContainer>
            ))}
            {records.map((record, index) => (
              <RecordContainer key={record.recordId}>
                <div onClick={() => handleItemClick(record.recordId, 'record')} style={{cursor: 'pointer'}}>
                  <RecordInfoItem key={record.recordId} recordlist={record} />
                </div>
                <ButtonContainer>
                  <BasketButton onClick={() => console.log('basket')} />
                  <Button>서가위치 보기</Button>
                </ButtonContainer>
              </RecordContainer>
            ))}
            {goods.map((goods, index) => (
              <RecordContainer key={goods.goods_id}>
                <div onClick={() => handleItemClick(goods.goods_id, 'goods')} style={{cursor: 'pointer'}}>
                  <GoodsInfoItem key={goods.goods_id} goodslist={goods} />
                </div>
                <ButtonContainer>
                  <BasketButton onClick={() => console.log('basket')} />
                  <Button>서가위치 보기</Button>
                </ButtonContainer>
              </RecordContainer>
            ))}
          </div>
        </RightContainer>
      </Container>
    </>
  );
};

export default SearchResultList;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  min-width: 1024px;
  margin-bottom: 32px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 60%;
  min-width: 800px;

  margin-left: 32px;
  padding: 0 16px;
`;

const RecordContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 16px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

// NoResult 컴포넌트

const NoResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 64px 0;
`;

const Message = styled.p`
  color: #333;
  font-size: 18px;
  margin: 0;
  width: 80%;
`;

const Highlight = styled.span`
  color: #e60073;
  font-weight: 700;
`;

const Instructions = styled.ul`
  padding-left: 20px;
  padding-top: 20px;
  list-style-type: disc;
  color: #666;
  font-size: 16px;
  border-top: 2px solid #e9e9e9;
  width: 80%;
`;

const Instruction = styled.li`
  margin-bottom: 10px;
`;
