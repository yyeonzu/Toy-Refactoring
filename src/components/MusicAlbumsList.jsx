import React from 'react';
import styled from 'styled-components';
import GoodsComponent from './GoodsComponent';
import albumImg1 from '../assets/images/BranchPage/goods-component/album1.png';
import albumImg2 from '../assets/images/BranchPage/goods-component/album2.png';
import albumImg3 from '../assets/images/BranchPage/goods-component/album3.png';
import albumImg4 from '../assets/images/BranchPage/goods-component/album4.png';

const MusicAlbumsList = () => {
  return (
    <AlbumsList>
      <GoodsField>음반·비디오</GoodsField>
      <AlbumsComponent>
        <GoodsComponent
          productImg={albumImg1}
          productTitle="세븐틴 - SEVENTEEN BEST ALBUM ‘17 IS"
          productPrice="23,400원"
          productDC="11% 할인"
        />
        <GoodsComponent
          productImg={albumImg2}
          productTitle="세븐틴 - SEVENTEEN BEST ALBUM ‘17 IS"
          productPrice="12,400원"
          productDC="11% 할인"
        />
        <GoodsComponent
          productImg={albumImg3}
          productTitle="아이브 - 미니 2집 IVE SWITCH (PLVE ver.)"
          productPrice="13,500원"
          productDC="11% 할인"
        />
        <GoodsComponent
          productImg={albumImg4}
          productTitle="아이브 - 미니 2집 IVE SWITCH (Digipack"
          productPrice="12,800원"
          productDC="10% 할인"
        />
      </AlbumsComponent>
    </AlbumsList>
  );
};

export default MusicAlbumsList;

const AlbumsList = styled.div`
  gap: 16px;
  padding-top: 60px;
`;

const GoodsField = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 16px;
  margin: 0px 0px;
`;

const AlbumsComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
