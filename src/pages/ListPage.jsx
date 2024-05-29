import React from 'react';
import {useParams} from 'react-router-dom';

import BookList from '../components/ProductList/BookList';
import RecordList from '../components/ProductList/RecordList';
import GoodsList from '../components/ProductList/GoodsList';

const ListPage = () => {
  const {classification} = useParams();

  const renderList = () => {
    switch (classification) {
      case 'books':
        return <BookList />;
      case 'records':
        return <RecordList />;
      case 'goods':
        return <GoodsList />;
      default:
        return <BookList />;
    }
  };
  return <>{renderList()}</>;
};

export default ListPage;
