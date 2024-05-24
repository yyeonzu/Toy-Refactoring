import React, {useState} from 'react';
import styled from 'styled-components';
import BookItem from './BookItem';
import AlbumItem from './AlbumItem';
import GoodsItem from './GoodsItem';

const BasketComponent = () => {
  const [items, setItems] = useState([
    {id: 1, type: 'book'},
    {id: 2, type: 'book'},
    {id: 3, type: 'album'},
    {id: 4, type: 'book'},
    {id: 5, type: 'album'},
    {id: 6, type: 'goods'},
  ]);

  const deleteItems = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <BasketGoods>
      {items.map((item) => (
        <BasketItems>
          <div key={item.id}>
            {item.type === 'book' && <BookItem />}
            {item.type === 'album' && <AlbumItem />}
            {item.type === 'goods' && <GoodsItem />}
          </div>
          <BasketBtns>
            <PrintBtn>출력하기</PrintBtn>
            <DeleteBtn onClick={() => deleteItems(item.id)}>삭제하기</DeleteBtn>
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
