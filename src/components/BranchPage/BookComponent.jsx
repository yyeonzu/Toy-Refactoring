import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import GoodsComponent from './GoodsComponent';

const BookComponent = ({is_domestic, category, topic}) => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();
  const handleItemClick = (id, type) => {
    navigate(`/details/${id}?type=${type}`);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/books/${is_domestic}/${category}/${topic}`
        );
        console.log(response.data);
        setBooks(response.data.booklist);
      } catch (error) {
        console.error('정보 받아오지 못함', error);
        setBooks([]);
      }
    };
    fetchBooks();
  }, [is_domestic, category, topic]);

  return (
    <>
      {books.map((book) => (
        <GoodsComponent
          key={book.bookId}
          productImg={book.refImage}
          productTitle={book.title}
          productPrice={`${book.lowestPrice}원`}
          productDC={`${Math.round(((book.regularPrice - book.lowestPrice) / book.regularPrice) * 100)}% 할인`}
          onClick={() => handleItemClick(book.id, 'book')}
        ></GoodsComponent>
      ))}
    </>
  );
};

export default BookComponent;
