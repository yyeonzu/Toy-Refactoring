import React from 'react';
import styled from 'styled-components';
import viewModal from '../../assets/images/BranchPage/modal-route.png';
import closeX from '../../assets/images/BranchPage/x-close.svg';

const OpenRouteModal = ({onClose}) => {
  return (
    <RouteModal>
      <RouteModalImg src={viewModal} alt="찾아오는 길" />
      {/* <ModalWindow>
        <RouteDescript>
          <ModalTitle>찾아오는 길</ModalTitle>
          <ModalText>
            <p>지하철</p>
            <p>신촌역 하차 2번 출구로 나와 연세대학교 방향 200m</p>
            <p>버스</p>
            <p>신촌 로터리역 / 신촌 명물거리역 하차 연세대학교 방향 50m</p>
          </ModalText>
        </RouteDescript>
      </ModalWindow> */}
      <CloseBtn src={closeX} alt="닫는 버튼" onClick={onClose} />
    </RouteModal>
  );
};

export default OpenRouteModal;

const RouteModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const RouteModalImg = styled.img`
  width: 774px;
  height: 449px;
  border-radius: 20px;
  display: flex;
`;

// const ModalWindow = styled.div`
//   width: 533px;
//   height: 385px;
//   border-radius: 20px;
//   background-color: white;
//   display: flex;
//   padding: 24px 171px 40px 40px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 24px;
// `;

// const RouteDescript = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ModalTitle = styled.p`
//   font-family: Pretendard;
//   font-size: 20px;
//   font-weight: 700;
// `;

// const ModalText = styled.p`
//   font-family: Pretendard;
//   font-size: 16px;
//   font-weight: 400;

const CloseBtn = styled.img`
  cursor: pointer;
  position: relative;
  top: -200px;
`;
