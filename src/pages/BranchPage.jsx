import React from 'react';
import styled from 'styled-components';
import FieldTable from '../components/BranchPage/FieldTable';
import BranchSideBar from '../components/BranchPage/BranchSideBar';
import BasketPage from './BasketPage';
import BranchSideBarBtn from '../components/BranchPage/BranchSideBarBtn';
import SinchonBox from '../components/BranchPage/SinchonBox';
import BooksList from '../components/BranchPage/BooksList';
import MusicAlbumsList from '../components/BranchPage/MusicAlbumsList';
import AladinGoodsList from '../components/BranchPage/AladinGoodsList';

const BranchPage = () => {
  const newsList = [
    '매입 후 <알라딘캐시> 정산 시 5% 추가 지급',
    '매입 후 <알라딘캐시> 정산 시 10% 추가 지급',
    '2024 서울 입학준비금 포인트 사용처',
  ];
  const FAQList = [
    '매장의 위치/주소/전화번호를 알고 싶어요.',
    '중고매장의 재고 유무/가격/외관상태 확인 가능한가요?',
    '중고매장에 방문해 중고 상품 판매도 가능한가요?',
  ];

  return (
    <BranchPageComponent>
      <SinchonBox />
      <SinchonInfo>
        <BranchMain>
          <FieldTable />
          <GoodsList>
            <BooksList />
            <MusicAlbumsList />
            <AladinGoodsList />
          </GoodsList>
        </BranchMain>
        <SideBar>
          <BranchSideBarBtn text="매장소식" color="#999999" />
          <BranchSideBar listData={newsList} />
          <BranchSideBarBtn text="중고매장 FAQ" color="#999999" />
          <BranchSideBar listData={FAQList} />
        </SideBar>
      </SinchonInfo>
    </BranchPageComponent>
  );
};

export default BranchPage;

const BranchPageComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 222px 0 222px;
`;

const SinchonInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding-top: 40px;
`;

const BranchMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 282px;
`;

const GoodsList = styled.div`
  padding-top: 64px;
  padding-bottom: 72px;
`;
