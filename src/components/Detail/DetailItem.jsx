import styled from 'styled-components';
import BuyandAddBtn from './BuyandAddBtn';

const DetailItem = ({type}) => {
  return (
    <ItemContainer>
      {/* 상세 페이지 음반의 경우 */}
      {type === 'record' ? (
        <>
          <ImgContainer></ImgContainer>
          <InfoContainer>
            <Title02>음반 제목</Title02>
            <Texts>
              <Text>가수/발매사</Text>
              <Text>
                음반 위치: <BoldColoredText>A17</BoldColoredText> (위에서부터 4번째칸)
              </Text>
              <Text>
                가격: <BoldColoredText>7000원</BoldColoredText>
              </Text>
              <BoldText>
                상태: <BoldColoredText>상</BoldColoredText>
              </BoldText>
            </Texts>
            <BuyandAddBtn />
          </InfoContainer>
        </>
      ) : (
        // 상세 페이지 도서의 경우
        <>
          <BookImgContainer></BookImgContainer>
          <InfoContainer>
            <Title02>[중고] 도서 제목</Title02>
            <Texts>
              <Text>출판사/지은이</Text>
              <Flex>
                <PriceText>
                  가격: <BoldColoredText>7000원</BoldColoredText>
                </PriceText>
                <Text>
                  도서 위치: <BoldColoredText>A17</BoldColoredText> (위에서부터 4번째칸)
                </Text>
              </Flex>
              <BoldText>
                상태: <BoldColoredText>상</BoldColoredText>
              </BoldText>
            </Texts>
            <BuyandAddBtn />
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
  font-family: Pretendard;
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
  font-family: Pretendard;
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
