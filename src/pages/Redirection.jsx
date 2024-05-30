import React, {useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Redirection = () => {
  const url = `${url}`;
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  console.log(code);

  useEffect(() => {
    if (code) {
      axios
        .get(`${url}/oauth2/kakao?code=${code}`)
        .then((response) => {
          const {accountId, userinfo, accessToken, refreshToken} = response.data;
          console.log(response.data);
          console.log(userinfo);
          window.localStorage.setItem('accountId', accountId);
          window.localStorage.setItem('access_token', accessToken);
          window.localStorage.setItem('refresh_token', refreshToken);
          console.log('로그인 성공');
          navigate('/');
          alert('로그인 완료');
        })
        .catch((error) => {
          console.error(error);
          console.log('로그인 실패');
        });
    }
  }, [code, navigate, url]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Redirection;
