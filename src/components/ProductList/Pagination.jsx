import styled from 'styled-components';
import {useState} from 'react';

const Pagination = ({currentPage, setCurrentPage, totalPages}) => {
  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PaginationContainer>
      <Text>총 {totalPages}페이지</Text>
      <ButtonContainer>
        <IconButton onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
          &lt;&lt;
        </IconButton>
        <IconButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </IconButton>
        {Array.from({length: totalPages}, (_, index) => (
          <NumberButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            // disabled={currentPage === index + 1}
            active={(currentPage === index + 1).toString()}
          >
            {index + 1}
          </NumberButton>
        ))}
        <IconButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt;
        </IconButton>
        <IconButton onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
          &gt;&gt;
        </IconButton>
      </ButtonContainer>
      <Text>
        {totalPages}페이지 중 {currentPage}페이지
      </Text>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const Text = styled.div`
  color: #999999;
  font-size: 12px;
  font-weight: 400;
  padding: 6px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const DefaultButton = styled.button`
  padding: 6px;
  margin: 0 4px;
  font-size: 12px;
  font-weight: 400;

  border: none;
  cursor: pointer;
`;

const NumberButton = styled(DefaultButton)`
  background-color: #e9e9e9;
  background-color: ${(props) => (props.active === 'true' ? '#EA328F' : '#e9e9e9')};
  color: ${(props) => (props.active === 'true' ? '#fff' : '#000')};
  &:disabled {
    background-color: #f0f0f0;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const IconButton = styled(DefaultButton)`
  background: none;
`;
