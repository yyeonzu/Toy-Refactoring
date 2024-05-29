import styled from 'styled-components';
import BuyandAddBtn from './BuyandAddBtn';

const DetailItem = ({type, list, item, idx}) => {
  const state = {
    GOOD: '상',
    FAIR: '중',
    POOR: '하',
  };

  return (
    <ItemContainer>
      {/* 상세 페이지 음반의 경우 */}
      {type === 'record' ? (
        <>
          <ImgContainer src={item.refImage} alt="refImage" />
          <InfoContainer>
            <Title02>{item.title}</Title02>
            <Texts>
              <Text>
                {item.singer}/{item.publisher}
              </Text>
              <Text>
                음반 위치: <BoldColoredText>{item.location}</BoldColoredText>
              </Text>
              <Text>
                가격: <BoldColoredText>{list[idx].price}원</BoldColoredText>
              </Text>
              <BoldText>
                상태: <BoldColoredText>{state[list[idx].state]}</BoldColoredText>
              </BoldText>
            </Texts>
            <BuyandAddBtn data={{itemType: 'record', itemId: item.recordId}} />
          </InfoContainer>
        </>
      ) : (
        // 상세 페이지 도서의 경우
        <>
          <BookImgContainer src={item.refImage} alt="refImage" />
          <InfoContainer>
            <Title02>[중고] {item.title}</Title02>
            <Texts>
              <Text>{item.author}</Text>
              <Flex>
                <PriceText>
                  가격: <BoldColoredText>{list[idx].price}원</BoldColoredText>
                </PriceText>
                <Text>
                  도서 위치: <BoldColoredText>{item.location}</BoldColoredText>
                </Text>
              </Flex>
              <BoldText>
                상태: <BoldColoredText>{state[list[idx].state]}</BoldColoredText>
              </BoldText>
            </Texts>
            <BuyandAddBtn data={{itemType: 'book', itemId: item.bookId}} />
          </InfoContainer>
        </>
      )}
    </ItemContainer>
  );
};

export default DetailItem;

const ItemContainer = styled.div`
  display: flex;
  gap: 24px;
  position: relative;
  width: 670px;
  height: 240px;
  flex-shrink: 0;
`;
const ImgContainer = styled.img`
  width: 180px;
  height: 180px;
`;

const BookImgContainer = styled.img`
  display: flex;
  width: 180px;
  height: 240px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title02 = styled.label`
  display: flex;
  align-items: center;
  height: 31px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

const Text = styled.label`
  height: 23px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PriceText = styled(Text)`
  width: 126px;
`;

const BoldText = styled(Text)`
  font-weight: 700;
`;

const BoldColoredText = styled(BoldText)`
  color: #ea328f;
`;

const Flex = styled.div`
  display: flex;
  gap: 48px;
`;

