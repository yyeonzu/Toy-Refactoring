import React from 'react';
import styled from 'styled-components';
import {RiArrowRightSLine as ArrowRight} from 'react-icons/ri';
import {ReactComponent as EscrowImage} from '../../assets/images/Footer/footer_escrow.svg';

const Footer = () => {
  const footerlinklist = [
    {name: '회사소개', link: '#'},
    {name: '채용안내', link: '#'},
    {name: '이용약관', link: '#'},
    {name: '개인정보처리방침', link: '#'},
    {name: '청소년 보호정책', link: '#'},
    {name: '중고매장', link: '#'},
    {name: '제휴·마케팅 안내', link: '#'},
    {name: '판매자·매니저', link: '#'},
    {name: '출판사·공급사 안내', link: '#'},
    {name: '광고 안내', link: '#'},
    {name: '학교·기업·기관 대량구매', link: '#'},
  ];

  return (
    <FooterContainer>
      <FooterTop>
        <FooterLinkContainer>
          {footerlinklist.map((item, index) => (
            <FooterLink key={index} href="#">
              {item.name}
            </FooterLink>
          ))}
        </FooterLinkContainer>
      </FooterTop>
      <FooterBottom>
        <ContactInfo>
          <h3>(주)알라딘커뮤니케이션 중고매장</h3>
          <ContactDetail>
            영업시간: 9:30 ~ 22:00 (명절 당일 휴무) / 지점별 영업시간에 차이가 있으니 자세한 안내는 지점별 상세 페이지
            참고
          </ContactDetail>
          <ContactDetail>
            <span>대표이사 최우영</span>
            <span>고객정보보호 책임자 최우영 </span>
            <span>사업자등록번호 201-81-23094</span>
            <span> 통신판매업신고 중구01520호</span>
          </ContactDetail>
          <ContactDetail>
            <span> 이메일 privacy@aladin.co.kr</span>
            <span>호스팅 제공자 알라딘커뮤니케이션 </span>
            <span>(본사) 서울시 중구 서소문로 89-31</span>
          </ContactDetail>
          <ContactDetail color="#999">ⓒ Aladin Communication. All Rights Reserved.</ContactDetail>
        </ContactInfo>
        <CustomerService>
          <h3>고객센터 1544-2514 (발신자 부담)</h3>
          <CustomerServiceDetail>서울시 마포구 백범로 71 숨도빌딩 7층 Fax 02-6926-2600</CustomerServiceDetail>
          <ButtonWrapper>
            <Button>1:1 문의</Button>
            <Button>FAQ</Button>
          </ButtonWrapper>
          <Button>중고매장 위치, 영업시간 안내</Button>
        </CustomerService>
      </FooterBottom>
      <FooterButtonSection>
        <EscrowButton>
          <StyledEscrowImage />
          구매안전 에스크로 서비스 가입 확인
          <ArrowRight size={18} />
        </EscrowButton>
      </FooterButtonSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 1280px;
  width: 100vw;
  max-width: 100%;
  padding-bottom: 16px;
`;

const FooterTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
`;

const FooterLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  white-space: nowrap;
`;

const FooterLink = styled.a`
  color: #333;
  font-size: 12px;
  font-weight: 400;
  padding: 12px;

  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  max-width: 1200px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactDetail = styled.div`
  margin: 5px 0;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : '#666')};

  display: flex;
  justify-content: space-between;
`;

const CustomerService = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomerServiceDetail = styled(ContactDetail)``;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.a`
  margin: 5px 0;
  padding: 10px 50px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const FooterButtonSection = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: flex-start;
`;

const EscrowButton = styled(Button)`
  padding: 10px 80px;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledEscrowImage = styled(EscrowImage)`
  margin-right: 4px;
`;
