import {Link} from 'react-router-dom';
import styled from 'styled-components';

const BranchNavBar = ({branch}) => {
  console.log(branch);
  const navItems = [
    {to: `/branch/${branch}`, label: '매장 소개'},
    {to: `/branch/${branch}/books`, label: '중고 도서'},
    {to: `/branch/${branch}/goods`, label: '알라딘 굿즈'},
    {to: `/branch/${branch}/records`, label: '음반·비디오'},
  ];
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
