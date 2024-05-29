import styled from 'styled-components';
import {useState, useEffect} from 'react';
import DetailItem from './DetailItem';
import Review from './Review';
import SortingBtns from './SortingBtns';

const MiddleMenu = ({type, item, usedList}) => {
  const sorting = [
    {id: 'name', content: '상품명순'},
    {id: 'date', content: '출시일순'},
    {id: 'upload', content: '등록순'},
    {id: 'lowprice', content: '저가격순'},
    {id: 'highprice', content: '고가격순'},
    {id: 'best', content: '베스트순'},
  ];

  // 중간 메뉴바 선택
  const [clicked, setClicked] = useState('item');

  const onClick = (e) => {
    const current = e.target.id;
    setClicked(current);
  };

  return (
    <MenuContainer>
      {/* 굿즈 상세 페이지 */}
      {type === 'goods' ? (
        <>
          <MenuBar>
            <LeftMenu id="item" clicked={clicked === 'item'}>
              상품 소개 보기
            </LeftMenu>
          </MenuBar>
          <ImgContainer>
            <img src={item.refImage} alt="info" />
          </ImgContainer>
        </>
      ) : (
        <>
          {/* 도서, 음반 상세 페이지 */}
          <MenuBar>
            <LeftMenu id="item" clicked={clicked === 'item'} onClick={onClick}>
              중고매장 상품 모두보기 ({usedList.length})
            </LeftMenu>
            <CenterMenu id="review" clicked={clicked === 'review'} onClick={onClick}>
              온라인매장 리뷰 보기
            </CenterMenu>
            <RightMenu>책소개 보기</RightMenu>
          </MenuBar>
          {/* 상품 보기 */}
          {clicked === 'item' ? (
            <>
              <SortingBtns sorting={sorting} />
              <ListContainer>
                {usedList &&
                  usedList.map((it, idx) => <DetailItem key={idx} type={type} list={usedList} item={item} idx={idx} />)}
              </ListContainer>
            </>
          ) : (
            // 리뷰 보기
            <Review />
          )}
        </>
      )}
    </MenuContainer>
  );
};

export default MiddleMenu;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 131px;
`;

const MenuBar = styled.div`
  display: flex;
  align-items: end;
  width: 1200px;
  height: 63px;
  background-color: #33afe9;
`;

const MenuBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 4px 4px 0px 0px;
  background: ${(props) => (props.clicked === true ? '#fff' : '#33afe9')};
  color: ${(props) => (props.clicked === true ? '#33afe9' : '#fff')};
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LeftMenu = styled(MenuBtn)`
  margin-left: 76px;
  width: 248px;
  cursor: pointer;
`;

const CenterMenu = styled(MenuBtn)`
  margin-left: 18px;
  width: 224px;
  cursor: pointer;
`;

const RightMenu = styled(MenuBtn)`
  margin-left: 30px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 1200px;
  }
`;
