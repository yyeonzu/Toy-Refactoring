import styled from 'styled-components';
import {useEffect, useRef, useState, React, memo} from 'react';
import {storelist} from '../../services/storelist';
import DropDown from './DropDown';
import {getSearch} from '../../services/api/search';
import {useNavigate, useLocation} from 'react-router-dom';

// 헤더 로고 컴포넌트
const Logo = memo(({branch}) => {
  // 로고 src
  const logoSrc = 'https://image.aladin.co.kr/img/header/2023/aladin_logo.jpg';

  // 로고 아래의 특정 타이틀
  const title = branch === 'default' ? '온라인 중고매장' : `${branch}점`;

  // 로고 클릭시
  const navigate = useNavigate();
  const handleLogoClick = () => {
    if (branch === 'default') {
      navigate('/');
    } else {
      navigate(`/branch/${branch}`);
    }
  };
  return (
    <>
      <LogoContainer onClick={handleLogoClick}>
        <img src={logoSrc} alt="알라딘" style={{width: '180px'}} />
        <Text>{title}</Text>
      </LogoContainer>
    </>
  );
});

// 검색창 컴포넌트
export const SearchBar = ({branch}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const searchParams = new URLSearchParams(location.search);
  const initialWord = searchParams.get('word') || '';

  // dropdown에서 선택한 branch
  const [selectedBranch, setSelectedBranch] = useState(branch === 'default' ? '전체 매장' : branch);
  // 검색어
  const [searchQuery, setSearchQuery] = useState(initialWord);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?word=${searchQuery}`);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    setSearchQuery(initialWord);
  }, [initialWord]);

  return (
    <>
      <SearchBarContainer>
        <Logo branch={branch} />
        <InputContainer onSubmit={handleSearch}>
          <DropDown selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} />
          <Input type="text" value={searchQuery} onChange={handleSearchChange} ref={inputRef} />
          <SearchButton type="submit">검색</SearchButton>
        </InputContainer>
      </SearchBarContainer>
    </>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Text = styled.div`
  color: #3962ad;
  font-size: 14px;
  font-weight: 700;
`;

const InputContainer = styled.form`
  width: 480px;
  height: 40px;
  border: 2px solid #33afe9;
  background-color: #fff;

  border-radius: 20px;
  padding: 0 20px 0 16px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const Input = styled.input`
  font-size: 16px;
  width: 60%;
  border: none;
  outline: none;
  height: 90%;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 100%;
  border: none;

  position: absolute;
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;

  color: #fff;
  border: none;

  border-radius: 0 20px 20px 0;

  background-color: #33afe9;
  top: -0;
  right: -2px;
`;
