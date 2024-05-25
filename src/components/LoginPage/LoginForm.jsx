import React from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <>
      <FormContainer>
        <InputBox>
          <IdBox>ID 또는 E-Mail</IdBox>
          <PasswordBox>비밀번호</PasswordBox>
        </InputBox>
        <LoginBtn>로그인</LoginBtn>
      </FormContainer>
      <FormBtns>
        <FormBtnText>
          <StyledCheckbox />
          ID 또는 E-Mail 저장
        </FormBtnText>
        <FormBtnText>비밀번호 찾기</FormBtnText>
        <FormBtnText>아이디 찾기</FormBtnText>
      </FormBtns>
    </>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
`;

const IdBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 290px;
  height: 40px;
  padding-left: 16px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #999;
  color: #999;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

const PasswordBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 290px;
  height: 40px;
  padding-left: 16px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #999;
  color: #999;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

const LoginBtn = styled.div`
  display: flex;
  width: 86px;
  height: 88px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #ea328f;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
`;

const FormBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const FormBtnText = styled.div`
  color: #999;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const StyledCheckbox = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid #999;
  background: #fff;
  margin-right: 8px;
`;
