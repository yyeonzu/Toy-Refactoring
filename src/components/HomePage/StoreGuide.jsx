import styled from 'styled-components';
import {useState, useEffect} from 'react';

const StoreGuide = () => {
  const [clicked, setClicked] = useState('buy');

  const onClick = (e) => {
    const current = e.target.id;
    setClicked(current);
  };

  useEffect(() => {
    const type = ['buy', 'sell', 'FAQ'];
    const notClicked = type.filter((it) => it != clicked);
    document.getElementById(clicked).style.background = '#fff';
    document.getElementById(clicked).style.border = '1px solid #3962AD';
    document.getElementById(clicked).style.borderBottom = 'none';
    notClicked.map((it) => {
      document.getElementById(it).style.background = '#E8EDF6';
      document.getElementById(it).style.border = 'none';
      document.getElementById(it).style.borderBottom = '1px solid #3962AD';
    });
  }, [clicked]);

  return (
    <ContentContainer>
      <Title02>중고매장 이용안내</Title02>
      <BtnContainer>
        <Btn onClick={onClick} id="buy">
          이렇게 삽니다
        </Btn>
        <Btn onClick={onClick} id="sell">
          이렇게 팝니다
        </Btn>
        <Btn onClick={onClick} id="FAQ">
          중고매장 FAQ
        </Btn>
      </BtnContainer>
      <GuideContainer>
        {clicked === 'buy' ? (
          <>
            <Empha02>01. 매입가격</Empha02>
            <Detail01>
              - 보유 재고량, 상품상태, 신간 및 베스트셀러 여부에 따라 매입가격이 결정됩니다.
              <br />
              단, 같은 도서를 5권이상 판매하시는 경우에는 구매처를 확인하는 절차가 있습니다.
            </Detail01>
            <Empha02>02. 보유재고량에 따른 매입가격 차이</Empha02>
            <Detail01>- 보유 재고량이 알라딘의 판매능력을 초과한 경우 사지 않습니다.</Detail01>
            <Empha02>03. 상품 상태에 따른 매입가격 차이</Empha02>
            <Detail01>
              - 상품 상태에 따라 &lt;최상&gt;, &lt;상&gt;, &lt;중&gt;, &lt;매입불가&gt;로 나뉩니다.
              <br />- 5쪽 초과 메모, 제본 탈착, 구성품 누락, 2cm이상 찢어진 도서, 스크래치 CD는 &lt;매입불가&gt;입니다.
              <br />- 2cm 초과하는 얼룩이 5쪽 초과한 도서는 책곰팡이 발생 우려가 있어 &lt;매입불가&gt;입니다.
            </Detail01>
            <Empha02>04. 신간 베스트셀러 인센티브</Empha02>
            <Detail01>
              - 출간일 14개월 이내의 일부 신간베스트셀러는 구간도서보다 비싸게 삽니다.
              <br />- 알라딘에서 구매한 신간 베스트셀러는 추가 혜택이 있습니다.
            </Detail01>
            <Empha02>05. 특수분야 및 특수유통상품 매입불가</Empha02>
            <Detail01>
              - 전집류 / 캘린더 / 다이어리 / 시즌이 지난 수험서 및 컴퓨터 서적은 사지 않습니다.
              <br />- 매년 개정되는 문제풀이 위주의 참고서는 사지 않습니다.
              <br />- 요리 / 인문사회 / 과학 / 문예지 / 만화 / 예술 분야를 제외한 잡지 분야 상품은 사지 않습니다.
              <br />- 알라딘에 등록되지 않은 상품은 사지 않습니다.
              <br />
              <span style={{color: '#EA328F'}}>- 증정 도서/비매품은 사지 않습니다.</span>
            </Detail01>
            <Empha02>06. 온라인과 오프라인 매입 가격 동일</Empha02>
            <Detail01>- 다만 보유재고량에 따라 변동하며, 상품상태에 따라 달라집니다.</Detail01>
          </>
        ) : clicked === 'sell' ? (
          <>
            <Empha02>01. 고객이 방금 팔고간 책</Empha02>
            <Detail01>
              - 고객님이 오늘 매장에 방문, 판매한 책을 진열하였습니다.
              <br />- 1일 5-7회 새로운 책이 진열됩니다.
              <br />- 이 책들은 진열 후 분야별 서가로 이동합니다.
            </Detail01>
            <Empha02>02. 오늘 들어온 책</Empha02>
            <Detail01>
              - 고객님이 온라인알라딘을 통해 판매한 책을 진열하였습니다.
              <br />- 1일 1회 새로운 책이 입고됩니다.
              <br />- 현재 진열된 책은 내일 오전 분야별 매장으로 이동합니다.
            </Detail01>
            <Empha02>03. 알라딘 스페셜</Empha02>
            <Detail01>
              - 중고서점의 인기 컬렉션별로 책을 진열하였습니다.
              <br />- "오늘 들어온 책", "고객이 방금 팔고간 책", "최상품질 중고가격", "출간일 1년 신간", "해시태그 추천
              서가",
              <br />
              "이 책의 다음 독자에게" 등의 컬렉션이 있습니다.
            </Detail01>
            <Empha02>04. 검색/모바일 검색</Empha02>
            <Detail01>
              - 매장검색대 위치는 매장안내도를 참고하십시오.
              <br />- 모바일검색(off.aladin.co.kr)을 이용하시면 줄을 설 필요가 없습니다.
              <br />- 다른 고객님이 보고계시는 경우 찾으시는 책이 없을 수 있습니다.
            </Detail01>
            <Empha02>05. 다른 결제수단</Empha02>
            <Detail01>- 온라인알라딘 적립금, 도서상품권, 문화상품권, 해피머니 상품권, S-oil 상품권</Detail01>
            <Empha02>06. 7일 이내에 반품 가능</Empha02>
            <Detail01>
              - 구매 다음 날 부터 7일 이내 구매 매장에 영수증 지참해 방문하시면 됩니다.
              <br />- 온라인알라딘에 구매등록하신 경우 온라인알라딘에서 반품신청하십시오. (택배비 2,500원은 고객님이
              부담)
            </Detail01>
          </>
        ) : (
          <>
            <Empha02>01. 가까운 중고매장 위치/교통편이 궁금합니다.</Empha02>
            <Detail01>
              - 상단의 원하시는 매장 클릭하시면 영업시간/보유 재고/위치/교통편/주차시설 등 관련 정보를 확인하실 수
              있습니다.
              <br />
              단, 전용 주차시설은 없으며 인근 유료주차장 혹은 대중교통을 이용해주십시오.
            </Detail01>
            <Empha02>02. 중고매장 영업시간이 궁금합니다.</Empha02>
            <Detail01>- 오전 09:30 ~ 오후 10시 까지이며, 설(음력 1월 1일),추석 명절 당일만 휴무입니다.</Detail01>
            <Empha02>03. 중고매장을 방문해서 판매할 수 있습니까?</Empha02>
            <Detail01>
              - 중고매장을 방문하여 "책 삽니다" 데스크에서 판매할 수 있습니다.
              <br />- 매입 가능여부,매입예상가는 방문 전 아래 페이지의 "중고팔기 예상가" 메뉴로 확인해보시기 바랍니다.
              <br />
              단, 매입기준과 매입량에 따라 실시간 변동되므로,매입 가능 상품이라도 매장 방문 후 매입불가, 매입가 변동
              가능성도 있습니다.
            </Detail01>
            <Empha02>04. 어떤 책을 매입하지 않습니까?</Empha02>
            <Detail01>
              - 상품성을 잃어버린 책은 사지 않습니다.
              <br /> ① 젖은 책, 찢어진 책, 심한 낙서가 있는 책<br /> ② 잡지, 참고서, 구판수험서 등 시즌성 책이나
              알라딘미등록 상품
              <br /> ③ 일부 전집, 고서
            </Detail01>
            <Empha02>05. 중고매장에 찾는 책이 있는지 미리 알 수 있습니까?</Empha02>
            <Detail01>
              - 페이지 상단에 검색창에서 원하시는 매장 선택 후 상품명을 입력하시면, 매장에 판매중인 상품이면 검색결과가
              나옵니다.
            </Detail01>
            <Empha02>06. 중고매장 상품 재고예약(전화 혹은 인터넷)이 가능합니까?</Empha02>
            <Detail01>- 실시간 매장판매가 이루어지므로 예약 구매는 서비스는 불가합니다.</Detail01>
            <Empha02>07. 중고매장 구매상품 반품이 가능합니까?</Empha02>
            <Detail01>
              - 구매 다음 날 부터 7일 이내 구매 매장에 영수증 지참해 방문하시면 됩니다.
              <br />- 영수증을 분실하신 경우에는 상품 뒷면의 라벨이 부착되어 있으면 가능합니다.
              <br />- 인터넷 주문상품의 중고매장 방문반품이나, 중고매장 구매 상품의 인터넷 반품은 불가하며, 각 구매처
              반품방법을 이용하셔야 합니다.
              <br />- 매장 구매상품의 다른 상품 교환은 불가하며, 매장 방문 후 반품,환불 받으신 후 새로 구매해주십시오.
            </Detail01>
          </>
        )}
      </GuideContainer>
    </ContentContainer>
  );
};

export default StoreGuide;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Title02 = styled.label`
  margin-bottom: 16px;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const BtnContainer = styled.div`
  display: flex;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;
  gap: 8px;
  border-bottom: 1px solid #3962ad;
  background: #e8edf6;
  color: #3962ad;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
const GuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 40px 40px;
`;

const Empha02 = styled.label`
  margin-bottom: 4px;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Detail01 = styled.p`
  margin: 0 0 8px 0;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
