import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {bookClassification} from '../../services/classification';
import {Link, useNavigate} from 'react-router-dom';

export const Classification = ({title, type, openCategory, setOpenCategory}) => {
  // 카테고리 클릭시 child 카테고리 여닫기
  const handleParentClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const currentPath = window.location.pathname;
  const [topic, setTopic] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (topic === '') return;
    navigate(`${currentPath}?topic=${topic}`);
  }, [topic]);

  // 카테고리 트리 렌더링 (트리, 부모 카테고리)
  const renderTree = (tree, parentCategory = '', listCount = '') => {
    return Object.keys(tree).map((category) => {
      const curCategory = parentCategory ? `${parentCategory} > ${category}` : category;
      const isOpen = openCategory === curCategory;

      const hasChildren = Object.keys(tree[category]).length > 0;
      const handleClick = () => {
        if (hasChildren) {
          handleParentClick(curCategory);
        }
      };

      return (
        <div key={curCategory}>
          {hasChildren && (
            <Category onClick={handleClick}>
              {category}
              <span>{openCategory === curCategory ? '-' : '+'}</span>
            </Category>
          )}
          {!hasChildren && <SubCategory onClick={() => setTopic(category)}>{category}</SubCategory>}
          {isOpen && (
            <SubCategoryContainer>{renderTree(tree[category], curCategory, (listCount = 1))}</SubCategoryContainer>
          )}
        </div>
      );
    });
  };

  return (
    <MenuContainer>
      <Title>{title || '국내 도서 분류'}</Title>
      {renderTree(type || bookClassification)}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 300px;
  white-space: nowrap;

  margin-top: 80px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 12px 20px;
`;

const Category = styled.div`
  border: solid 1px #e9e9e9;
  cursor: pointer;

  font-size: 16px;
  font-weight: 400;
  padding: 12px 20px;

  display: flex;
  justify-content: space-between;
`;

const SubCategoryContainer = styled.div`
  background-color: #e9e9e9;
  display: flex;
  flex-wrap: wrap;
  > div {
    flex: 1 1 50%;
  }
  align-items: center;
  padding: 10px 0;
`;

const SubCategory = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding: 12px 20px;

  display: flex;
  justify-content: flex-start;

  cursor: pointer;
  &:hover {
    color: #ff8a3d;
  }
`;
