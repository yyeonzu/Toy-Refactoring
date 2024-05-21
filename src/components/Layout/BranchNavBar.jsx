import {Link} from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  {to: '/branch/:branchName', label: '매장 소개'},
  {to: '/test-link', label: '중고 도서'},
  {to: '/test-link', label: '알라딘 굿즈'},
  {to: '/test-link', label: '음반·비디오'},
];

const BranchNavBar = () => {
  return (
    <>
      <Container>
        {navItems.map((item, index) => (
          <NavItem key={index} to={item.to} style={{listStyle: 'none'}}>
            {item.label}
          </NavItem>
        ))}
      </Container>
    </>
  );
};

export default BranchNavBar;

const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavItem = styled(Link)`
  padding: 6px 2% 12px 2%;
  text-decoration: none;
  color: #3962ad;
  font-weight: 700;
  font-size: 16px;
`;
