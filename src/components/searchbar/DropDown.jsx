import {useState} from 'react';
import styled from 'styled-components';
import {RiArrowDownSLine as ArrowIcon} from 'react-icons/ri';
import {storelist} from '../../services/storelist';

export const DropDown = ({branch = '전체 매장', selectedBranch, setSelectedBranch}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = ['전체 매장', ...storelist.seoulList, ...storelist.gyeonggiList, ...storelist.othersList];

  const toggling = () => setIsOpen(!isOpen);

  const onClickOption = (value) => {
    setSelectedBranch(value);
    setIsOpen(false);
  };

  return (
    <>
      <SelectContainer onClick={toggling}>
        <DropDownHeader>
          {selectedBranch}
          {isOpen && (
            <DropDownContainer>
              {options.map((option, index) => (
                <Option key={index} value={option} onClick={() => onClickOption(option)}>
                  {option}
                </Option>
              ))}
            </DropDownContainer>
          )}
        </DropDownHeader>
        <StyledArrow size={32} />
      </SelectContainer>
    </>
  );
};

export default DropDown;

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  background-color: #fff;
  height: 100%;
`;

const DropDownHeader = styled.div`
  color: #33afe9;
  font-weight: 600;

  width: 140px;
  align-items: center;
`;

const DropDownContainer = styled.ul`
  position: absolute;
  z-index: 1000;
  width: 100%;
  max-height: calc(14px * 20);
  outline: none;

  border: none;
  color: #3962ad;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;
  padding: 0;
  margin-top: 2px;
`;

const Option = styled.li`
  color: #3962ad;
  font-size: 14px;
  font-weight: 600;
  background-color: #fff;
  width: 100%;
  position: relative;
  padding: 4px;
  cursor: pointer;
`;

const StyledArrow = styled(ArrowIcon)`
  color: #30d2f6;
  font-weight: 700;
  position: absolute;
  right: 20%;
`;
