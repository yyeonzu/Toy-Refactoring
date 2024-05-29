import styled from 'styled-components';
import {BookInfoItem, GoodsInfoItem, RecordInfoItem} from '../ProductInfo/ProductInfo';
import BuyandAddBtn from './BuyandAddBtn';

const DetailTop = ({type, item}) => {
  return (
    <TopContainer>
      {type === 'book' ? (
        <BookInfoItem booklist={item} />
      ) : type === 'record' ? (
        <RecordInfoItem recordlist={item} />
      ) : (
        <ItemContainer>
          <GoodsInfoItem goodslist={item} />
          <BuyandAddBtn type="top" data={{itemType: 'goods', itemId: `${item.goodsId}`}}/>
        </ItemContainer>
      )}
      <ImgContainer>
        <Title02>신촌점 서가 단면도</Title02>
        <StoreSectionImg src={require('../../assets/images/Detail/sinchon_map.png')} alt="map" />
      </ImgContainer>
    </TopContainer>
  );
};

export default DetailTop;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 38px 0;
  width: 1200px;
`;

const ItemContainer = styled.div`
  position: relative;
  height: 241px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: -11px;
`;
const Title02 = styled.label`
  color: #000;
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const StoreSectionImg = styled.img``;
