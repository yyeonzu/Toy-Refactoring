import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {Classification} from './Classification';
import SortingBar from './SortingBar';
import {getBooks, getRecords} from '../../services/api/productlist';
import {recordClassification} from '../../services/classification';
import {BookInfoItem, RecordInfoItem} from '../ProductInfo/ProductInfo';
import Pagination from './Pagination';
import BasketButton from './BasketButton';
import {useNavigate} from 'react-router-dom';

const getIndex = (category) => {
  const categories = Object.keys(recordClassification);
  return categories.indexOf(category);
};

const RecordList = () => {
  // default 카테고리: 가요
  const [category, setCategory] = useState('가요');
  const [recordlist, setRecordlist] = useState([]);

  // currentPage 상태
  const [currentPage, setCurrentPage] = useState(1);

  // 한 페이지에 보여줄 product 개수
  const itemsPerPage = 4;
  const totalPages = Math.ceil(recordlist.length / itemsPerPage);

  // 현재 페이지에 해당하는 책 목록 계산
  const currentRecordlist = recordlist.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const fetchAllRecords = async (productObjs = recordClassification, category = '가요') => {
    const categoryIndex = getIndex(category);
    const topics = Object.keys(productObjs[category]);
    const productlist = [];

    for (const [topicIndex] of topics.entries()) {
      const products = await getRecords(categoryIndex + 1, topicIndex + 1);
      if (products) {
        productlist.push(...products.recordList);
      }
      if (products.recordList.length === 0) {
        console.error(products);
      }
    }
    return productlist;
  };

  useEffect(() => {
    fetchAllRecords().then((recordlist) => {
      setRecordlist(recordlist);
    });
  }, [category]);

  const navigate = useNavigate();
  const handleItemClick = (id, type) => {
    navigate(`/details/${id}?type=${type}`);
  };

  return (
    <>
      <Container>
        <Classification
          title="음반 분류"
          type={recordClassification}
          openCategory={category}
          setOpenCategory={setCategory}
        ></Classification>
        <RightContainer>
          <SortingBar length={recordlist.length} />
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
          <div>
            {currentRecordlist.map((record, index) => (
              <RecordContainer key={record.recordId}>
                {index + 1}.
                <div onClick={() => handleItemClick(record.recordId, 'record')} style={{cursor: 'pointer'}}>
                  <RecordInfoItem key={record.recordId} recordlist={record} />
                </div>
                <ButtonContainer>
                  <BasketButton type="record" id={record.recordId} />
                  <Button onClick={() => console.log('here')}>서가위치 보기</Button>
                </ButtonContainer>
              </RecordContainer>
            ))}
          </div>
        </RightContainer>
      </Container>
    </>
  );
};

export default RecordList;

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
`;
