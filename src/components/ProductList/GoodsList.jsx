import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {Classification} from './Classification';
import SortingBar from './SortingBar';
import {getBooks, getGoods, getRecords} from '../../services/api/productlist';
import {recordClassification} from '../../services/classification';
import {BookInfoItem, GoodsInfoItem, RecordInfoItem} from '../ProductInfo/ProductInfo';
import Pagination from './Pagination';
import BasketButton from './BasketButton';
import {useNavigate} from 'react-router-dom';

const getIndex = (category) => {
  const categories = Object.keys(recordClassification);
  return categories.indexOf(category);
};

const GoodsList = () => {
  // default 카테고리: 가요
  const [goodslist, setGoodslist] = useState([]);

  // currentPage 상태
  const [currentPage, setCurrentPage] = useState(1);

  // 한 페이지에 보여줄 product 개수
  const itemsPerPage = 4;
  const totalPages = Math.ceil(goodslist.length / itemsPerPage);

  // 현재 페이지에 해당하는 책 목록 계산
  const currentGoodslist = goodslist.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    getGoods().then((goodslist) => {
      setGoodslist(goodslist.goodsList);
      console.log('goods', goodslist.goodsList);
    });
  }, []);

  const navigate = useNavigate();
  const handleItemClick = (id, type) => {
    navigate(`/details/${id}?type=${type}`);
  };

  return (
    <>
      <Container>
        <RightContainer>
          <SortingBar length={goodslist.length} />
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
          <div>
            {currentGoodslist.map((goods, index) => (
              <RecordContainer key={goods.goods_id}>
                {index + 1}.
                <div onClick={() => handleItemClick(goods.goods_id, 'goods')} style={{cursor: 'pointer'}}>
                  <GoodsInfoItem goodslist={goods} />
                </div>
                <ButtonContainer>
                  <BasketButton />
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

export default GoodsList;

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
