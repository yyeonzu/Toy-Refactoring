import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import GoodsComponent from './GoodsComponent';

const MusicAlbumComponent = ({category, topic}) => {
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();
  const handleItemClick = (id, type) => {
    navigate(`/details/${id}?type=${type}`);
  };

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/records/${category}/${topic}`);
        console.log(response.data);
        setRecords(response.data.recordList);
      } catch (error) {
        console.error('정보 받아오지 못함', error);
        setRecords([]);
      }
    };
    fetchRecords();
  }, [category, topic]);

  return (
    <>
      {records.map((record) => (
        <GoodsComponent
          key={record.recordId}
          productImg={record.refImage}
          productTitle={record.title}
          productPrice={`${record.lowestPrice}원`}
          productDC={`${Math.round(((record.price - record.lowestPrice) / record.price) * 100)}% 할인`}
          onClick={() => handleItemClick(record.recordId, 'record')}
        ></GoodsComponent>
      ))}
    </>
  );
};

export default MusicAlbumComponent;
