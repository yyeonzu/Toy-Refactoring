import StoreList from '../components/HomePage/StoreList';
import Carousel from '../components/HomePage/Carousel';
import styled from 'styled-components';
import RightSideLongSquareBtn from '../components/HomePage/RightSideLongSquareBtn';
import RightSideList from '../components/HomePage/RightSideList';
import AvailableNum from '../components/HomePage/AvailableNum';
import SearchPrice from '../components/HomePage/SearchPrice';
import StoreGuide from '../components/HomePage/StoreGuide';

const HomePage = () => {
  // 오른쪽 매장 소식 데이터
  const newsList = [
    '매입 후 <알라딘캐시> 정산 시 5% 추가 지급',
    '매입 후<알라딘캐시> 정산 시 10% 추가 지급',
    '2024 서울 입학준비금 포인트 사용처',
    'Apple Pay 결제 지원 시작',
    '매장 첫 구매 시 5% 적립',
    '카페 테일의 풍성한 혜택',
  ];

  return (
    <MainContainer>
      <LeftContainer>
        <Carousel />
        <StoreList />
        <SearchPrice />
        <StoreGuide />
      </LeftContainer>
      <RightContainer>
        <img src={require('../assets/images/HomePage/main-banner-02.png')} alt="banner" />
        <RightSideLongSquareBtn text="매장소식" color="#EA328F" />
        <RightSideList listData={newsList} color="#EA328F" />
        <RightSideLongSquareBtn text="중고매장 FAQ" color="#EA328F" />
        <AvailableNum />
        <img src={require('../assets/images/HomePage/market-btn-oneclick.png')} alt="banner" />
        <img src={require('../assets/images/HomePage/market-btn-box.png')} alt="banner" />
      </RightContainer>
    </MainContainer>
  );
};

export default HomePage;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 0 222px;
  justify-content: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 282px;
`;
