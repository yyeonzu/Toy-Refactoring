import styled from 'styled-components';
import {useState} from 'react';

const SortingBtns = ({sorting, style}) => {
  const [sort, setSort] = useState(sorting[2].id);

  const onSortClick = (e) => {
    const current = e.target.id;
    setSort(current);
  };

  return (
    <SortList style={style}>
      {sorting.map((it, idx) => (
        <SortBtn key={idx} id={it.id} clicked={it.id === sort} onClick={onSortClick}>
          {it.content}
        </SortBtn>
      ))}
    </SortList>
  );
};

export default SortingBtns;

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
  color: ${(props) => (props.clicked ? '#000' : 'rgba(0, 0, 0, 0.5)')};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
