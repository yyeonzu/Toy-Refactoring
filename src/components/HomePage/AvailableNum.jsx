import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {ReactComponent as Plus} from '../../assets/images/HomePage/plus-circle.svg';

const AvailableNum = () => {
  const normal = ['286,148', '0', '0', '0'];
  const flat = ['8,321', '0', '0', '0'];

  const [clicked, setClicked] = useState('0');
  const [normalNum, setNormalNum] = useState(normal[0]);
  const [flatPriceNum, setFlatPriceNum] = useState(flat[0]);

  const onClick = (e) => {
    const current = e.target.id;
    setClicked(current);
    setNormalNum(normal[Number(current)]);
    setFlatPriceNum(flat[Number(current)]);
  };

  useEffect(() => {
    const type = ['0', '1', '2', '3'];
    const notClicked = type.filter((it) => it != clicked);
    document.getElementById(clicked).style.color = '#EA328F';
    document.getElementById(clicked).style.background = '#fff';
    notClicked.map((it) => {
      document.getElementById(it).style.color = '#000';
      document.getElementById(it).style.background = '#E9E9E9';
    });
  }, [clicked]);

  return (
    <ContentContainer>
      <TotalNumLabel>오늘 매입 가능 종수: 265,843종</TotalNumLabel>
      <BodyContainer>
        <BtnContainer>
          <Btn onClick={onClick} id="0">
            전체
          </Btn>
          <Btn onClick={onClick} id="1">
            국내도서
          </Btn>
          <Btn onClick={onClick} id="2">
            음반
          </Btn>
          <Btn onClick={onClick} id="3">
            DVD
          </Btn>
        </BtnContainer>
        <TextContainer>
          <Group>
            <SmallLabel>정상매입</SmallLabel>
            <BigLabel>{normalNum}종</BigLabel>
          </Group>
          <Plus />
          <Group>
            <SmallLabel>균일가매입</SmallLabel>
            <BigLabel>{flatPriceNum}종</BigLabel>
          </Group>
        </TextContainer>
      </BodyContainer>
    </ContentContainer>
  );
};

export default AvailableNum;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: 16px 13px 10px 13px;
  border-top: 1px solid #ea328f;
  border-bottom: 1px solid var(--02, #ea328f);
  background: #fff;
`;

const TotalNumLabel = styled.label`
  color: var(--02, #ea328f);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BtnContainer = styled.div`
  display: flex;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  padding: 4px 0;
  border-top: 1px solid #e9e9e9;
  background: #e9e9e9;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 8px 0 13px 0;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  width: 78px;
`;

const SmallLabel = styled.label`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BigLabel = styled.label`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
