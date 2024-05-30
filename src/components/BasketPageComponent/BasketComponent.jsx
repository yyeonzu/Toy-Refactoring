import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {axiosInstance} from '../../services/api';
import BookItem from './BookItem';
import AlbumItem from './AlbumItem';
import GoodsItem from './GoodsItem';

const BasketComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axiosInstance.get('/accounts/carts');
        setItems(res.data.slice(0, 6));
        console.log(res.data);
      } catch (error) {
        console.log('장바구니 목록 오류', error);
      }
    };
    fetchCartItems();
  }, []);

  const deleteItems = async (cartId) => {
    try {
      console.log('cartId:', cartId);
      const response = await axiosInstance.delete(`/carts/${cartId}`);
      console.log('Delete response:', response);
      setItems((prevItems) => {
        console.log('Previous items:', prevItems); // 이전 상태 확인
        const updatedItems = prevItems.filter((item) => item.cartId !== cartId);
        return updatedItems.slice(0, 6);
      });
    } catch (error) {
      console.log('장바구니 삭제 오류', error);
    }
  };

  return (
    <BasketGoods>
      {items.map((item) => (
        <BasketItems key={item.cartId}>
          <div>
            {item.itemType === 'book' && <BookItem item={item} />}
            {item.itemType === 'album' && <AlbumItem item={item} />}
            {item.itemType === 'goods' && <GoodsItem item={item} />}
          </div>
          <BasketBtns>
            <PrintBtn>출력하기</PrintBtn>
            <DeleteBtn onClick={() => deleteItems(item.cartId)}>삭제하기</DeleteBtn>
          </BasketBtns>
        </BasketItems>
      ))}
    </BasketGoods>
  );
};

export default BasketComponent;

const BasketGoods = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const BasketItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BasketBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding-left: 257px;
  float: right;
`;

const PrintBtn = styled.button`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #3962ad;
  background: #e8edf6;
  white-space: nowrap;
  cursor: pointer;
`;

const DeleteBtn = styled(PrintBtn)`
  border: 1px solid #010101;
  background: #fff;
  cursor: pointer;
`;
