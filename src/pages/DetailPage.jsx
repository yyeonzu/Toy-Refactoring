import styled from 'styled-components';
import MiddleMenu from '../components/Detail/MiddleMenu';
import DetailTop from '../components/Detail/DetailTop';
import {useSearchParams} from 'react-router-dom';

const DetailPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <DetailContainer>
      <DetailTop />
      <MiddleMenu type={searchParams.get('type')}/>
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 120px;
`;
