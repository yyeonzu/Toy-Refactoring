import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {Classification} from './Classification';
import SortingBar from './SortingBar';
import {getBooks} from '../../services/api/productlist';
import {bookClassification} from '../../services/classification';
import {BookInfoItem} from '../ProductInfo/ProductInfo';
import Pagination from './Pagination';
import BasketButton from './BasketButton';
import {useLocation, useNavigate} from 'react-router-dom';

// booklist 중 특정 category에 대한 모든 list를 저장하는 함수 (API 연결)

// 그 중 특정 topic에 대한 값만 불러오는 함수 (위의 list에서 필터) (API 연결 X)

const getIndex = (category) => {
  const categories = Object.keys(bookClassification);
  return categories.indexOf(category);
};

const BookList = () => {
  // default 카테고리: 건강/취미
  const [category, setCategory] = useState('건강/취미');
  const [booklist, setBooklist] = useState([]);

  // url의 ?topic=query 가져오기
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topic = searchParams.get('topic');

  // currentPage 상태
  const [currentPage, setCurrentPage] = useState(1);

  // 한 페이지에 보여줄 product 개수
  const itemsPerPage = 3;
  const totalPages = Math.ceil(booklist.length / itemsPerPage);

  // 현재 페이지에 해당하는 책 목록 계산
  const currentBooklist = booklist.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const fetchAllBooks = async (productObjs = bookClassification, category = '건강/취미') => {
    const categoryIndex = getIndex(category);
    const topics = Object.keys(productObjs[category]);
    const productlist = [];

    for (const [topicIndex] of topics.entries()) {
      try {
        const products = await getBooks(categoryIndex + 1, topicIndex + 1);
        if (products) {
          productlist.push(...products.booklist);
        }
        if (products.booklist.length === 0) {
          console.error('No books found for topic index:', topicIndex + 1);
        }
      } catch (error) {
        console.error('Failed to fetch books for topic index:', topicIndex + 1, error);
      }
    }
    return productlist;
  };

  const fetchTopicBooks = async (topic) => {
    const topics = Object.keys(bookClassification[category]);
    const topicIndex = topics.indexOf(topic);
    try {
      const booklist = await getBooks(getIndex(category) + 1, topicIndex + 1);
      return booklist.booklist;
    } catch (error) {
      console.error('Failed to fetch books for topic:', topic, error);
      return [];
    }
  };

  useEffect(() => {
    if (topic === null) {
      fetchAllBooks()
        .then((booklist) => {
          setBooklist(booklist);
        })
        .catch((error) => {
          console.error('Failed to fetch all books:', error);
        });
      return;
    }
    fetchTopicBooks(topic)
      .then((booklist) => {
        setBooklist(booklist);
      })
      .catch((error) => {
        console.error('Failed to fetch books for topic:', topic, error);
      });
  }, [topic]);

  // infoitem 클릭시 상세페이지로 이동
  const navigate = useNavigate();
  const handleItemClick = (id, type) => {
    navigate(`/details/${id}?type=${type}`);
  };

  return (
    <>
      {booklist && (
        <Container>
          <Classification openCategory={category} setOpenCategory={setCategory}></Classification>
          <RightContainer>
            <SortingBar length={booklist.length} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            <div>
              {currentBooklist.map((book, index) => (
                <BookContainer key={book.id}>
                  {index + 1}.
                  <div onClick={() => handleItemClick(book.id, 'book')} style={{cursor: 'pointer'}}>
                    <BookInfoItem key={book.id} booklist={book} />
                  </div>
                  <ButtonContainer>
                    <BasketButton type="book" id={book.id} />
                    <Button>서가위치 보기</Button>
                  </ButtonContainer>
                </BookContainer>
              ))}
            </div>
          </RightContainer>
        </Container>
      )}
    </>
  );
};

export default BookList;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

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

const BookContainer = styled.div`
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
`;

const PointerBookInfoItem = styled(BookInfoItem)`
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
  border: solid 1px #000;
`;
