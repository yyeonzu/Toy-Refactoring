import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';

const NavBar = () => {
  // 현재 경로 받아오기
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeItem, setActiveItem] = useState(`/${currentPath}`);

  const navItems = [
    {id: 1, to: '/', label: '중고매장'},
    {id: 2, to: '/real-link', label: '온라인 알라딘'},

    {id: 3, to: '/basket', label: '장바구니'},
    {id: 4, to: '/login', label: '로그인'},
    {id: 5, to: '/fake-link', label: '중고매장 FAQ'},
  ];

  // 경로 변경시 acitveItem 변경
  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <NavBarContainer>
        <div style={{marginLeft: '5%'}}>
          {navItems.slice(0, 2).map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              active={(activeItem === item.to).toString()}
              onClick={() => handleClick(item.to)}
            >
              {item.label}
            </NavItem>
          ))}
        </div>
        <div style={{marginRight: '5%'}}>
          {navItems.slice(2, 5).map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              active={(activeItem === item.to).toString()}
              onClick={() => handleClick(item.to)}
            >
              {item.label}
            </NavItem>
          ))}
        </div>
      </NavBarContainer>
    </>
  );
};

const NavBarContainer = styled.div`
  height: 38px;
  background-color: #33afe9;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled(Link)`
  color: ${(props) => (props.active === 'true' ? '#3962AD' : '#ffffff')};
  background-color: ${(props) => (props.active === 'true' ? '#ffffff' : 'none')};
  border-top: ${(props) => (props.active === 'true' ? '1px solid #ffffff' : 'none')};

  /* height: 40px; */
  padding: 12px 10px 12px 10px;
  text-decoration: none;

  font-size: 14px;
  font-weight: 600;

  &:hover {
    color: #3962ad;
  }
`;

export default NavBar;
