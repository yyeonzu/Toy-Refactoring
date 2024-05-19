import React from 'react';
import styled from 'styled-components';
import {booklist as mockbook} from '../../services/productlist';
import {recordlist as mockrecord} from '../../services/productlist';
import {goodslist as mockgoods} from '../../services/productlist';

// BookInfo 컴포넌트
export const BookInfoItem = ({booklist = mockbook.bookList[0]}) => {
  const {title, author, publisher, stock, location, lowestPrice, price} = booklist;
  const refImage = 'https://image.aladin.co.kr/product/32443/92/cover150/8959897175_3.jpg';
  // 임시
  const badge = '2022년 사회과학 분야 1위';

  return (
    <>
      <ItemContainer>
        <ImgContainer height="240px">
          <Img src={refImage} alt={title} />
        </ImgContainer>
        <InfoContainer>
          <TitleComponent title={title} badge={`[${badge}]`} />
          <AuthorComponent author={author} publisher={publisher} />
          <TextLine>
            <KeyValueComponent
              label="재고"
              value={{name: stock, unit: '개'}}
              style={{color: '#3962AD', weight: '700'}}
            />
            <KeyValueComponent
              label="도서 위치"
              value={{name: location, unit: ''}}
              style={{color: '#EA328F', weight: '700'}}
            />
          </TextLine>
          <KeyValueComponent
            label="최저가"
            value={{name: lowestPrice, unit: '원'}}
            style={{color: '#EA328F', weight: '700'}}
          />
          <KeyValueComponent label="정가" value={{name: price, unit: '원'}} style={{color: '#000', weight: '400'}} />
        </InfoContainer>
      </ItemContainer>
    </>
  );
};

// RecodeInfo 컴포넌트
export const RecordInfoItem = ({recordlist = mockrecord.recordList[0]}) => {
  const {title, singer, publisher, price, lowestPrice, stock, location} = recordlist;
  const refImage = 'https://image.aladin.co.kr/product/33875/57/cover150/c462938674_1.jpg';
  return (
    <>
      <ItemContainer>
        <ImgContainer height="180px">
          <Img src={refImage} alt={title} />
        </ImgContainer>
        <InfoContainer>
          <TitleComponent title={title} badge={''} />
          <AuthorComponent author={singer} publisher={publisher} />
          <TextLine>
            <KeyValueComponent
              label="재고"
              value={{name: stock, unit: '부'}}
              style={{color: '#3962AD', weight: '700'}}
            />
            <KeyValueComponent
              label="음반 위치"
              value={{name: location, unit: ''}}
              style={{color: '#EA328F', weight: '700'}}
            />
          </TextLine>
          <TextLine>
            <KeyValueComponent
              label="최저가"
              value={{name: lowestPrice, unit: '원'}}
              style={{color: '#EA328F', weight: '700'}}
            />
            <KeyValueComponent label="정가" value={{name: price, unit: '원'}} style={{color: '#000', weight: '400'}} />
          </TextLine>
        </InfoContainer>
      </ItemContainer>
    </>
  );
};

// GoodsInfo 컴포넌트
export const GoodsInfoItem = ({goodslist = mockgoods.goodsList[0]}) => {
  const {goods_name, price, stock, location, ref_image} = goodslist;
  const info = '상품정보가 길이를 넘어가는 경우에 나타내는 방법입니다.';
  const refImage = 'https://image.aladin.co.kr/product/33875/57/cover150/c462938674_1.jpg';
  return (
    <>
      <ItemContainer>
        <ImgContainer height="180px">
          <Img src={refImage} alt={goods_name} />
        </ImgContainer>
        <InfoContainer>
          <TitleComponent title={goods_name} badge={''} />
          <GoodsInfoComponent info={info} />
          <TextLine>
            <KeyValueComponent
              label="재고"
              value={{name: stock, unit: '개'}}
              style={{color: '#3962AD', weight: '700'}}
            />
            <KeyValueComponent
              label="상품 위치"
              value={{name: location, unit: ''}}
              style={{color: '#EA328F', weight: '700'}}
            />
          </TextLine>
          <KeyValueComponent label="판매가" value={{name: price, unit: '원'}} style={{color: '#000', weight: '400'}} />
        </InfoContainer>
      </ItemContainer>
    </>
  );
};

// 제목 컴포넌트
const TitleComponent = ({title, badge}) => {
  return (
    <TitleContainer>
      <Title fontSize="20px" fontWeight="700">
        {title}
      </Title>
      <Badge color="#EA328F">{badge}</Badge>
    </TitleContainer>
  );
};

// 작가 컴포넌트
const AuthorComponent = ({author, publisher}) => {
  return (
    <SpanContainer>
      {author}/{publisher}
    </SpanContainer>
  );
};

const GoodsInfoComponent = ({info = '상품 정보 없음'}) => {
  return <DetailContainer>{info}</DetailContainer>;
};

// 쌍이 되는 값 컴포넌트
const KeyValueComponent = ({label, value, style}) => {
  return (
    <>
      <SpanContainer>
        {label}:{' '}
        <Text padding={'0px'} color={style.color} fontWeight={style.weight}>
          {value.name}
          {value.unit}
        </Text>
      </SpanContainer>
    </>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: fit-content;
  /* border: solid 1px; */
`;

const ImgContainer = styled.div`
  width: 180px;
  height: ${(props) => props.height};
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 18px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
`;

const Text = styled.span`
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '400'};
  color: ${(props) => props.color || 'black'};
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  max-width: 170px;
  margin-bottom: 24px;
`;

const Title = styled(Text)`
  font-size: 18px;
  margin: 0;
  display: inline-block;
  align-items: center;
  white-space: normal;
  word-break: break-word;
  max-width: 170px;
  width: fit-content;
  position: relative;
`;

const Badge = styled(Text)`
  white-space: nowrap;
  margin-left: 12px;
  position: absolute;
  left: calc(100% - 2px);
`;

const TextLine = styled.div`
  display: flex;
`;

const SpanContainer = styled.span`
  min-width: 150px;
  max-height: calc(2em + 6px);
  padding: 6px 0 6px 0;
`;

const DetailContainer = styled(SpanContainer)`
  word-break: break-word;
  white-space: nowrap;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;

  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; */
`;
