import React, {useState, useEffect} from 'react';
import {axiosInstance} from '../../services/api';
import {useNavigate} from 'react-router-dom';
import GoodsComponent from './GoodsComponent';

const AladinGoodsComponent = () => {
  const [goods, setGoods] = useState([]);

  const navigate = useNavigate();
  const handleItemClick = (id, type) => {
    navigate(`/details/${id}?type=${type}`);
  };

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await axiosInstance.get(`/goods`);
        console.log(response.data);
        setGoods(response.data.goodsList.slice(0, 4));
      } catch (error) {
        console.error('정보 받아오지 못함', error);
        setGoods([]);
      }
    };
    fetchGoods();
  }, []);

  return (
    <>
      {goods.map((goods) => (
        <GoodsComponent
          key={goods.goods_id}
          productImg={goods.ref_image}
          productTitle={goods.goods_name}
          productPrice={`${goods.price}원`}
          onClick={() => handleItemClick(goods.goods_id, 'goods')}
        ></GoodsComponent>
      ))}
    </>
  );
};

export default AladinGoodsComponent;
