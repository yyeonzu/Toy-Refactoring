import React from 'react';
import styled from 'styled-components';
import MusicAlbumComponent from './MusicAlbumComponent';

const MusicAlbumsList = () => {
  return (
    <AlbumsList>
      <GoodsField>음반·비디오</GoodsField>
      <AlbumsComponent>
        <MusicAlbumComponent category="1" topic="2" />
        <MusicAlbumComponent category="1" topic="3" />
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
