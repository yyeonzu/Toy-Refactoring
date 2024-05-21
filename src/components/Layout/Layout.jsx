import styled from 'styled-components';
import NavBar from './NavBar';
import {SearchBar} from '../SearchBar/SearchBar';
import BranchNavBar from './BranchNavBar';
import {Outlet, useLocation, useParams} from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const {branchName} = useParams();

  const isBranchRoute = location.pathname.includes('/branch/');
  return (
    <>
      <Container>
        <NavBar />
        <SearchBar branch={branchName ? branchName : 'default'} />
        {isBranchRoute && <BranchNavBar branch={branchName} />}
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

const Container = styled.div`
  min-width: 1280px;
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  position: relative;

  border-bottom: 1px solid #33afe9;
  padding-bottom: 8px;
  margin-bottom: 36px;
`;
