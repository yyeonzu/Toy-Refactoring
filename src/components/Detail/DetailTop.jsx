import styled from 'styled-components';
import {BookInfoItem, GoodsInfoItem, RecordInfoItem} from '../ProductInfo/ProductInfo';
import {booklist as mockbook} from '../../services/productlist';
import {recordlist as mockrecord} from '../../services/productlist';
import {goodslist as mockgoods} from '../../services/productlist';
import BuyandAddBtn from './BuyandAddBtn';

const DetailTop = ({type}) => {
  return (
    <TopContainer>
      {type === 'book' ? (
        <BookInfoItem booklist={mockbook.bookList[0]} />
      ) : type === 'record' ? (
        <RecordInfoItem recordlist={mockrecord.recordList[0]} />
      ) : (
        <ItemContainer>
          <GoodsInfoItem goodslist={mockgoods.goodsList[0]} />
          <BuyandAddBtn type="top" />
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
  margin: 40px 0 38px 0;
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
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const StoreSectionImg = styled.img``;
