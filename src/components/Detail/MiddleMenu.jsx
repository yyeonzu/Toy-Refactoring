import styled from 'styled-components';
import {useState, useEffect} from 'react';
import DetailItem from './DetailItem';
import Review from './Review';

const MiddleMenu = ({type}) => {
  const [clicked, setClicked] = useState('item');
  const [itemSort, setItemSort] = useState('upload');

  const onClick = (e) => {
    const current = e.target.id;
    setClicked(current);
  };

  const onItemSortClick = (e) => {
    const current = e.target.id;
    setItemSort(current);
  };

  useEffect(() => {
    const list = ['name', 'date', 'upload', 'lowprice', 'highprice', 'best'];
    const notClicked = list.filter((it) => it != itemSort);
    document.getElementById(itemSort).style.color = '#000';
    notClicked.map((it) => {
      document.getElementById(it).style.color = 'rgba(0, 0, 0, 0.5)';
    });
  }, [itemSort]);

  // 메뉴바 클릭 시 색상 변경
  useEffect(() => {
    if (type === 'merch') {
      document.getElementById(clicked).style.background = '#fff';
      document.getElementById(clicked).style.color = '#3962AD';
    } else {
      const typelist = ['item', 'review'];
      const notClicked = typelist.filter((it) => it != clicked);
      document.getElementById(clicked).style.background = '#fff';
      document.getElementById(clicked).style.color = '#3962AD';
      notClicked.map((it) => {
        document.getElementById(it).style.background = '#33AFE9';
        document.getElementById(it).style.color = '#fff';
      });
    }
  }, [clicked]);

  return (
    <MenuContainer>
      {/* 굿즈 상세 페이지 */}
      {type === 'merch' ? (
        <MenuBar>
          <LeftMenu id="item">상품 소개 보기</LeftMenu>
        </MenuBar>
      ) : (
        <>
          {/* 도서, 음반 상세 페이지 */}
          <MenuBar>
            <LeftMenu id="item" onClick={onClick}>
              중고매장 상품 모두보기 (n)
            </LeftMenu>
            <CenterMenu id="review" onClick={onClick}>
              온라인매장 리뷰 보기
            </CenterMenu>
            <RightMenu>책소개 보기</RightMenu>
          </MenuBar>
          {/* 상품 보기 */}
          {clicked === 'item' ? (
            <>
              <SortList>
                <SortBtn id="name" onClick={onItemSortClick}>
                  상품명순
                </SortBtn>
                <SortBtn id="date" onClick={onItemSortClick}>
                  출시일순
                </SortBtn>
                <SortBtn color="black" id="upload" onClick={onItemSortClick}>
                  등록순
                </SortBtn>
                <SortBtn id="lowprice" onClick={onItemSortClick}>
                  저가격순
                </SortBtn>
                <SortBtn id="highprice" onClick={onItemSortClick}>
                  고가격순
                </SortBtn>
                <SortBtn id="best" onClick={onItemSortClick}>
                  베스트순
                </SortBtn>
              </SortList>
              <DetailItems>
                <DetailItem type={type} />
                <DetailItem type={type} />
              </DetailItems>
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
  background: #33afe9;
  color: #fff;
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

const SortList = styled.div`
  display: flex;
  gap: 24px;
  margin: 40px 0;
`;

const SortBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  color: ${(props) => (props.color ? '#000' : 'rgba(0, 0, 0, 0.5)')};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const DetailItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
`;
