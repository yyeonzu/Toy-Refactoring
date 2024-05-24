import React from 'react';
import styled from 'styled-components';
import viewModal from '../../assets/images/BranchPage/modal-view.png';
import closeX from '../../assets/images/BranchPage/x-close.svg';

const OpenViewModal = ({onClose}) => {
  return (
    <StoreView>
      <ViewModalImg src={viewModal} alt="매장 서가 단면도" />
      <CloseBtn src={closeX} alt="닫는 버튼" onClick={onClose} />
    </StoreView>
  );
};

export default OpenViewModal;

const StoreView = styled.div`
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

const ViewModalImg = styled.img`
  max-width: 466.222px;
  max-height: 720px;
  border-radius: 20px;
`;

const CloseBtn = styled.img`
  position: relative;
  top: -335px;
  right: 8px;
  cursor: pointer;
`;
