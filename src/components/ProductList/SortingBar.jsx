import styled from 'styled-components';
import {useState} from 'react';

const SortingBar = ({length}) => {
  //options
  const sortOptions = [
    {value: 'name', label: '상품명순'},
    {value: 'date_aes', label: '출시일순'},
    {value: 'date_des', label: '등록순'},
    {value: 'price_low', label: '저가격순'},
    {value: 'price_high', label: '고가격순'},
    {value: 'best', label: '베스트순'},
  ];

  // 현재 선택한 값
  const [sort, setSort] = useState(sortOptions[2]);

  // 값 변경
  const handleSort = (option) => {
    setSort(option);
  };
  return (
    <>
      <Container>
        <NumberContainer>총 {length}건의 결과</NumberContainer>
        <SortList>
          {sortOptions.map((option, index) => (
            <SortItem
              key={index}
              data-checked={(option.value === sort.value).toString()}
              onClick={() => handleSort(option)}
            >
              {option.label}
            </SortItem>
          ))}
        </SortList>
      </Container>
    </>
  );
};

export default SortingBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NumberContainer = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const SortList = styled.div`
  display: flex;
`;

const SortItem = styled.div`
  color: ${(props) => (props['data-checked'] === 'true' ? '#000' : '#D9D9D9')};
  cursor: pointer;
  padding: 15px 20px 0 0;
  font-size: 14px;
`;
