import styled from 'styled-components';
import MiddleMenu from '../components/Detail/MiddleMenu';
import DetailTop from '../components/Detail/DetailTop';
import {useParams, useSearchParams} from 'react-router-dom';
import {getBookDetail, getRecordDetail, getMerchDetail} from '../services/api/detail';
import {useEffect, useState} from 'react';

const DetailPage = () => {
  const {id} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type');

  const [item, setItem] = useState({});
  const [usedList, setUsedList] = useState([]);

  const getBookList = async () => {
    const res = await getBookDetail(id);
    if (res) {
      setItem(res.book);
      setUsedList(res.usedBookList);
    }
  };

  const getRecordList = async () => {
    const res = await getRecordDetail(id);
    if (res) {
      setItem(res.record);
      setUsedList(res.usedRecordList);
    }
  };

  const getMerchList = async () => {
    const res = await getMerchDetail(id);
    if (res) {
      setItem(res);
    }
  };

  useEffect(() => {
    if (type === 'book') {
      getBookList();
    } else if (type === 'record') {
      getRecordList();
    } else if (type === 'goods') {
      getMerchList();
    }
  }, [type, id]);

  return (
    <DetailContainer>
      <DetailTop type={type} item={item} />
      <MiddleMenu type={type} usedList={usedList} item={item} />
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 0 120px;
`;
