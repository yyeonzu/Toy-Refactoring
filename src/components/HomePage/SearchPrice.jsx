import styled from 'styled-components';

const SearchPrice = () => {
  return (
    <ContentContainer>
      <Img src={require('../../assets/images/HomePage/barcode-img.png')} alt="barcode-img" />
      <Title02>중고상품 매입가를 조회해 보세요.</Title02>
      <Empha01 color="#EA328F">조회한 매입 예상가, 매입 여부는 실제 매입가와 다를 수 있습니다.</Empha01>
      <Groups>
        <Group>
          <Empha01>상품타입</Empha01>
          <Radios>
            <Detail01>
              <input type="radio" />
              국내도서
            </Detail01>
            <Detail01>
              <input type="radio" />
              외국도서
            </Detail01>
            <Detail01>
              <input type="radio" />
              음반
            </Detail01>
            <Detail01>
              <input type="radio" />
              DVD/블루레이
            </Detail01>
          </Radios>
        </Group>
        <Group>
          <Empha01>상품명 또는 ISBN</Empha01>
          <FormBox>
            <Form>
              <SearchInput placeholder="상품명 또는 ISBN을 입력해주세요" />
              <SearchBtn>검색</SearchBtn>
            </Form>
            <Detail01 color="#EA328F">스마트폰으로 바코드를 촬영하면 중고로 팔 수 있어요.</Detail01>
          </FormBox>
        </Group>
      </Groups>
      <ul>
        <li>
          <Detail01 color="#999">
            조회한 매입 예상가는 현재의 정가에 대한 것으로, 동일 ISBN의 구정가의 경우 실제 매입가가 낮아질 수 있습니다.
          </Detail01>
        </li>
        <li>
          <Detail01 color="#999">
            매입가와 판매 가능 여부는 실시간으로 변경되므로 매장 방문 시점에 상품의 적정 재고량을 초과하면 매입가가
            내려가거나 매입되지 않을 수 있습니다. 단 온라인 매입은 접수완료 시간 기준으로 확정됩니다.
          </Detail01>
        </li>
        <li>
          <Detail01 color="#999">매입 가능한 상품이어도 상품의 품질 상태에 따라 매입불가일 수 있습니다.</Detail01>
        </li>
      </ul>
    </ContentContainer>
  );
};

export default SearchPrice;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 630px;
  height: 231px;
  padding: 24px 20px 24px 40px;
  margin-top: 40px;
  flex-shrink: 0;
  background-color: #e9e9e9;
  > ul {
    padding: 0;
    margin: 0 0 0 16px;
    color: #999;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 24px;
  right: 32px;
  width: 150px;
  height: 100px;
`;

const Title02 = styled.label`
  margin-bottom: 8px;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Empha01 = styled.label`
  color: ${(props) => (props.color ? props.color : '#000')};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Groups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
`;

const Group = styled.div`
  display: flex;
  justify-content: left;
`;

const Radios = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-left: 60px;
`;
const Detail01 = styled.label`
  display: flex;
  align-items: center;
  color: ${(props) => (props.color ? props.color : '#000')};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  input {
    margin: 0 1px 0 0;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
`;
const Form = styled.div`
  display: flex;
  gap: 4px;
`;

const SearchInput = styled.input`
  display: flex;
  width: 216px;
  height: 22px;
  padding: 0 40px 0 16px;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--02, #999);
  background: var(--00, #fff);
`;
const SearchBtn = styled.button`
  display: inline-flex;
  padding: 4px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  border: 1px solid #ea328f;
  background: var(--02, #ea328f);
  color: var(--00, #fff);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
