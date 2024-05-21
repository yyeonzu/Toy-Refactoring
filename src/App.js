import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import HomePage from './pages/HomePage';
import BranchPage from './pages/BranchPage';
import DetailPage from './pages/DetailPage';
import BasketPage from './pages/BasketPage';
import LoginPage from './pages/LoginPage';
import SearchResultPage from './pages/SearchResultPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/branch/:branchName" element={<BranchPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route paht="/search" element={<SearchResultPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
