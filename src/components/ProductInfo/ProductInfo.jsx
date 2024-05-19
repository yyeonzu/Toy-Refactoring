import React from 'react';
import styled from 'styled-components';
import {booklist as mock} from '../../services/productlist';

// RecodeInfo 컴포넌트
export const RecodeInfoItem = ({booklist = mock.bookList[0]}) => {
  return <></>;
};

// GoodsInfo 컴포넌트
export const GoodsInfoItem = ({booklist = mock.bookList[0]}) => {
  return <></>;
};

// BookInfo 컴포넌트
export const BookInfoItem = ({booklist = mock.bookList[0]}) => {
  const {title, author, publisher, badge, stock, location, lowestPrice, price, refImage} = booklist;

  return (
    <>
      <ItemContainer>
        <ImgContainer></ImgContainer>
        <InfoContainer>
          <TitleComponent title={title} />
          <AuthorComponent author={author} publisher={publisher} />
          <TextLine>
            <KeyValueComponent
              label="재고"
              value={{name: stock, unit: '개'}}
              style={{color: '#3962AD', weight: '700'}}
            />
            <KeyValueComponent
              label="위치"
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

// 제목 컴포넌트
const TitleComponent = ({title, badge = '2022년 사회과학 분야 1위'}) => {
  return (
    <TitleContainer>
      <Title fontSize="20px" fontWeight="700">
        {title}
      </Title>
      <Badge color="#EA328F">[{badge}]</Badge>
    </TitleContainer>
  );
};

// 작가 컴포넌트
const AuthorComponent = ({author, publisher}) => {
  return (
    <Text>
      {author}/{publisher}
    </Text>
  );
};

const KeyValueComponent = ({label, value, style}) => {
  return (
    <>
      <span>
        {label}:{' '}
        <Text color={style.color} fontWeight={style.weight}>
          {value.name}
          {value.unit}
        </Text>
      </span>
    </>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: fit-content;
  border: solid 1px;
`;

const ImgContainer = styled.div`
  width: 180px;
  height: 240px;
  background-color: #dedede;
  margin-right: 18px;
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
  padding: ${(props) => props.padding || '8px 0 8px 0'};
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  max-width: 170px;
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

const TextLine = styled(Text)`
  display: flex;
  width: 60%;
  justify-content: space-between;
`;
