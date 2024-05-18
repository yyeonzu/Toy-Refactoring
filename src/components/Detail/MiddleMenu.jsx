import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react';
import DetailItem from './DetailItem';
import RatingStars from './RatingStars';
import {ReactComponent as AddPhotoBtn} from '../../assets/images/Detail/photo.svg';
import {ReactComponent as DeleteBtn} from '../../assets/images/Detail/icon _close_.svg';

const MiddleMenu = ({type}) => {
  const [clicked, setClicked] = useState('item');

  const onClick = (e) => {
    const current = e.target.id;
    setClicked(current);
  };

  // 메뉴바 클릭 시 색상 변경
  useEffect(() => {
    if (type === 'merch') {
      document.getElementById(clicked).style.background = '#fff';
      document.getElementById(clicked).style.color = '#3962AD';
    } else {
      const typelist = ['item', 'review'];
      const notClicked = typelist.filter((it) => it != clicked);
      document.getElementById(clicked).style.background = '#fff';
      document.getElementById(clicked).style.color = '#3962AD';
      notClicked.map((it) => {
        document.getElementById(it).style.background = '#33AFE9';
        document.getElementById(it).style.color = '#fff';
      });
    }
  }, [clicked]);

  // 리뷰 코멘트 작성
  // 파일 업로드
  const fileUpload = useRef();
  const [file, setFile] = useState([]);

  // 업로드 버튼 클릭
  const handleUploadClick = () => {
    if (file.length < 4) {
      fileUpload.current.click();
    } else {
      alert('사진은 4장까지 첨부할 수 있습니다.');
    }
  };

  // onChange 파일 저장
  const handleUpload = (e) => {
    const {files} = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setFile([...file, reader.result]);
    };
  };

  // 임시 데이터
  const comment = [
    {date: '2024.04.05', content: '좋은 책이었다.', file: []},
    {date: '2024.04.05', content: '좋은 책이었다.', file: []},
    {
      date: '2024.04.05',
      content: '좋은 책이었다.',
      file: [
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InBob3RvIj4KPHJlY3QgaWQ9IlJlY3RhbmdsZSA0IiB4PSIwLjMiIHk9IjAuMyIgd2lkdGg9Ijc5LjQiIGhlaWdodD0iNzkuNCIgZmlsbD0iI0U5RTlFOSIgc3Ryb2tlPSIjOTk5OTk5IiBzdHJva2Utd2lkdGg9IjAuNiIvPgo8ZyBpZD0iJiMyNDA7JiMxNTk7JiMxNjY7JiMxMzQ7IGljb24gJiMzNDthZGQgYSBwaG90byYjMzQ7Ij4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTI4IDI2LjMzMzVWMjIuMzMzNUgzMC42NjY3VjI2LjMzMzVIMzQuNjY2N1YyOS4wMDAySDMwLjY2NjdWMzMuMDAwMkgyOFYyOS4wMDAySDI0VjI2LjMzMzVIMjhaTTMyIDM0LjMzMzVWMzAuMzMzNUgzNlYyNi4zMzM1SDQ1LjMzMzNMNDcuNzczMyAyOS4wMDAySDUyQzUzLjQ2NjcgMjkuMDAwMiA1NC42NjY3IDMwLjIwMDIgNTQuNjY2NyAzMS42NjY4VjQ3LjY2NjhDNTQuNjY2NyA0OS4xMzM1IDUzLjQ2NjcgNTAuMzMzNSA1MiA1MC4zMzM1SDMwLjY2NjdDMjkuMiA1MC4zMzM1IDI4IDQ5LjEzMzUgMjggNDcuNjY2OFYzNC4zMzM1SDMyWk00MS4zMzMzIDQ2LjMzMzVDNDUuMDEzMyA0Ni4zMzM1IDQ4IDQzLjM0NjggNDggMzkuNjY2OEM0OCAzNS45ODY4IDQ1LjAxMzMgMzMuMDAwMiA0MS4zMzMzIDMzLjAwMDJDMzcuNjUzMyAzMy4wMDAyIDM0LjY2NjcgMzUuOTg2OCAzNC42NjY3IDM5LjY2NjhDMzQuNjY2NyA0My4zNDY4IDM3LjY1MzMgNDYuMzMzNSA0MS4zMzMzIDQ2LjMzMzVaTTM3LjA2NjcgMzkuNjY2OEMzNy4wNjY3IDQyLjAyNjggMzguOTczMyA0My45MzM1IDQxLjMzMzMgNDMuOTMzNUM0My42OTMzIDQzLjkzMzUgNDUuNiA0Mi4wMjY4IDQ1LjYgMzkuNjY2OEM0NS42IDM3LjMwNjggNDMuNjkzMyAzNS40MDAyIDQxLjMzMzMgMzUuNDAwMkMzOC45NzMzIDM1LjQwMDIgMzcuMDY2NyAzNy4zMDY4IDM3LjA2NjcgMzkuNjY2OFoiIGZpbGw9IiM5OTk5OTkiLz4KPC9nPgo8L2c+Cjwvc3ZnPgo=',
      ],
    },
  ];

  // 코멘트 입력자 수 카운트
  const [count, setCount] = useState(0);

  const handlecounter = (e) => {
    if (e.target.value.length > 50) {
      e.target.value = e.target.value.slice(0, 50);
    }
    setCount(e.target.value.length);
  };

  const handleDelete = () => {
    window.confirm('리뷰를 정말 삭제하시겠습니까?');
  }

  return (
    <MenuContainer>
      {/* 굿즈 상세 페이지 */}
      {type === 'merch' ? (
        <MenuBar>
          <LeftMenu id="item">상품 소개 보기</LeftMenu>
        </MenuBar>
      ) : (
        <>
          {/* 도서, 음반 상세 페이지 */}
          <MenuBar>
            <LeftMenu id="item" onClick={onClick}>
              중고매장 상품 모두보기 (n)
            </LeftMenu>
            <CenterMenu id="review" onClick={onClick}>
              온라인매장 리뷰 보기
            </CenterMenu>
            <RightMenu>책소개 보기</RightMenu>
          </MenuBar>
          {/* 상품 보기 */}
          {clicked === 'item' ? (
            <>
              <SortList>
                <SortBtn>상품명순</SortBtn>
                <SortBtn>출시일순</SortBtn>
                <SortBtn>등록순</SortBtn>
                <SortBtn>저가격순</SortBtn>
                <SortBtn>고가격순</SortBtn>
                <SortBtn>베스트순</SortBtn>
              </SortList>
              <DetailItems>
                <DetailItem type={type} />
                <DetailItem type={type} />
              </DetailItems>
            </>
          ) : (
            // 리뷰 보기
            <>
              <TopContainer>
                <Title01>알라딘 온라인매장 구매 회원들이 평가한 평균 별점</Title01>
                <RatingStars type="readBig" rate="4.6" />
              </TopContainer>

              <InputContainer>
                <RatingStars />
                <AlignCenter>
                  <InputBox placeholder="해당 상품을 구매하셨나요? 감상평을 남겨주세요." onChange={handlecounter} />
                  <TextCounter>{count}/50</TextCounter>
                  <WriteBtn>작성하기</WriteBtn>
                </AlignCenter>
              </InputContainer>

              <Flex>
                <AddPhoto>
                  <Empha01>사진 추가</Empha01>
                  <AddPhotoBtn onClick={handleUploadClick} style={{cursor: 'pointer'}} />
                  <FileInput type="file" value="" ref={fileUpload} onChange={handleUpload} />
                </AddPhoto>
                <UploadedFiles>
                  {file && file.map((it, idx) => <FileLoader key={idx} src={it} alt="img" />)}
                </UploadedFiles>
              </Flex>

              <CommentSort>
                <SortBtn>최근순</SortBtn>
                <SortBtn>추천순</SortBtn>
                <SortBtn>별점순</SortBtn>
              </CommentSort>

              <ReviewContainer>
                {comment.map((it, idx) => (
                  <ReviewItem key={idx}>
                    <Date>{it.date}</Date>
                    <ReviewContent>{it.content}</ReviewContent>
                    <CommentPics>
                      {it.file.map((i, index) => (
                        <FileLoader key={index} src={i} alt="img" />
                      ))}
                    </CommentPics>
                    <RatingStars type="readSmall" />
                    {/* 해당 유저의 댓글만 삭제하도록 추후 변경 */}
                    <DeleteBtn onClick={handleDelete} style={{position: 'absolute', right: '23px', bottom: '23px', cursor: 'pointer'}}/>
                  </ReviewItem>
                ))}
              </ReviewContainer>
            </>
          )}
        </>
      )}
    </MenuContainer>
  );
};

export default MiddleMenu;

const Flex = styled.div`
  display: flex;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuBar = styled.div`
  display: flex;
  align-items: end;
  width: 1200px;
  height: 63px;
  background-color: #33afe9;
`;

const MenuBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 4px 4px 0px 0px;
  background: #33afe9;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LeftMenu = styled(MenuBtn)`
  margin-left: 76px;
  width: 248px;
  cursor: pointer;
`;

const CenterMenu = styled(MenuBtn)`
  margin-left: 18px;
  width: 224px;
  cursor: pointer;
`;

const RightMenu = styled(MenuBtn)`
  margin-left: 30px;
`;

const SortList = styled.div`
  display: flex;
  gap: 24px;
  margin: 40px 0;
`;

const CommentSort = styled(SortList)`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 24px 0;
  width: 1200px;
`;

const SortBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const DetailItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 1200px;
  padding: 44px 0 45px 0;
`;

const Title01 = styled.label`
  display: flex;
  align-items: center;
  height: 31px;
  padding: 0;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: end;
  width: 1180px;
  height: 133px;
  padding: 0 0 23px 20px;
  border: 0.6px solid var(--02, #999);
  background: var(--01, #e9e9e9);
`;

const InputBox = styled.textarea`
  width: 928px;
  height: 65px;
  padding: 12px 0 0 14px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  resize: none;
  &::placeholder {
    color: #999;
  }
`;

const TextCounter = styled.label`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 30px;
  right: 252px;
  height: 31px;
  color: var(--02, #999);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const WriteBtn = styled.button`
  width: 197px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 4px;
  border: none;
  background: var(--02, #ea328f);
  color: var(--00, #fff);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const AlignCenter = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
`;

const AddPhoto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 18px;
`;

const Empha01 = styled.label`
  display: flex;
  align-items: center;
  height: 31px;
  color: var(---, #010101);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FileInput = styled.input`
  display: none;
`;

const FileLoader = styled.img`
  width: 216px;
  height: 216px;
`;

const UploadedFiles = styled.div`
  display: flex;
  gap: 20px;
  align-items: end;
  margin: 53px 0 0 40px;
`;

const CommentPics = styled(UploadedFiles)`
  margin: 15px 0 0 0;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 104px;
  position: relative;
  width: 1174px;
  min-height: 105px;
  padding: 21px 0 31px 26px;
  flex-shrink: 0;
  border: 0.6px solid var(--02, #999);
  background: var(--01, #e9e9e9);
`;

const Date = styled.label`
  display: flex;
  align-items: center;
  height: 31px;
  color: var(--02, #999);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReviewContent = styled.p`
  margin: 0;
  padding: 0;
  color: var(---, #010101);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
