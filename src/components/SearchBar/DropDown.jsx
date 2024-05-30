import {useRef, useState} from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';
import {RiArrowDownSLine as ArrowIcon} from 'react-icons/ri';
import {storelist} from '../../services/storelist';

export const DropDown = ({selectedBranch, setSelectedBranch}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const options = ['전체 매장', ...storelist.seoulList, ...storelist.gyeonggiList, ...storelist.othersList];

  const toggling = () => setIsOpen(!isOpen);

  const onClickOption = (value) => {
    setSelectedBranch(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    // 클릭된 요소가  drop down에 포함되어 있지 않으면 isOpen을 false로 변경
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // document에 이벤트 리스너로 mouse down 이벤트 추가
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <SelectContainer ref={ref} onClick={toggling}>
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
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
  background-color: #fff;
  height: 100%;
`;

const DropDownHeader = styled.div`
  color: #33afe9;
  font-weight: 600;
  width: 110px;
`;

const DropDownContainer = styled.ul`
  position: absolute;
  z-index: 1000;
  width: 110%;
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
  overflow-x: hidden;
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
