import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import LoginForm from '../components/LoginPage/LoginForm';
import kakaoImg from '../../src/assets/images/Login/kakao-login.png';

const LoginPage = () => {
  const handleKakaoLogin = () => {
    axios
      .get(`https://api.toy-team1.o-r.kr/login`)
      .then((response) => {
        console.log('응답 데이터:', response.data); // 응답 데이터 출력
        console.log('로그인 접속!');
        window.location.href = response.data; // 백엔드에서 받은 URL로 리디렉션
      })
      .catch((error) => {
        console.error('로그인 실패', error);
      });
  };

  return (
    <LoginComponent>
      <LoginBox>
        <LoginTitle>알라딘 회원 로그인</LoginTitle>
        <LoginForm />
      </LoginBox>
      <KakaoLogin>
        <KakaoText>카카오 계정으로 로그인 하기</KakaoText>
        <KakaoImg src={kakaoImg} alt="카카오 로그인" onClick={handleKakaoLogin} />
      </KakaoLogin>
    </LoginComponent>
  );
};

export default LoginPage;

const LoginComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LoginTitle = styled.div`
  display: flex;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const KakaoLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 64px;
`;

const KakaoText = styled.div`
  color: #999;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 16px;
`;

const KakaoImg = styled.img`
  cursor: pointer;
`;
