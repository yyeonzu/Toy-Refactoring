import styled from 'styled-components';
import {useState, useEffect} from 'react';
import RatingStars from './RatingStars';
import {ReactComponent as DeleteBtn} from '../../assets/images/Detail/icon _close_.svg';
import {deleteReview, getReview, postReview} from '../../services/api/review';
import SortingBtns from './SortingBtns';
import FileUpload from './FileUpload';

const Review = () => {
  const accountId = localStorage.getItem('accountId');

  // 리뷰 정보 get
  const [review, setReview] = useState([]);
  const [avgRate, setAvgRate] = useState();

  // 리뷰 코멘트 작성
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(0);

  // 파일 업로드
  const [file, setFile] = useState([]);
  const [postFile, setPostFile] = useState([]);

  // 코멘트 분류 기준
  const sorting = [
    {id: 'recent', content: '최근순'},
    {id: 'recommend', content: '추천순'},
    {id: 'rate', content: '별점순'},
  ];

  // 코멘트 입력자 카운트
  const [count, setCount] = useState(0);

  // 리뷰 및 평균 별점 저장
  const saveReview = async () => {
    const res = await getReview();

    if (res && res.length > 0) {
      const reviewList = res;
      setReview(reviewList);
      setAvgRate((reviewList.reduce((sum, cum) => sum + cum.grade, 0) / reviewList.length).toFixed(1));
    }
  };

  useEffect(() => {
    saveReview();
  }, []);

  // 리뷰 작성
  const handleChange = (e) => {
    if (e.target.value.length > 50) {
      e.target.value = e.target.value.slice(0, 50);
    }
    setComment(e.target.value);
    setCount(e.target.value.length);
  };

  // 리뷰 삭제
  const handleDelete = async (e) => {
    const result = window.confirm('리뷰를 정말 삭제하시겠습니까?');
    if (result) {
      const res = await deleteReview(e.target.id);
      if (res) {
        window.location.reload();
      }
    }
  };

  // formdata 생성
  const makeFormData = () => {
    const formData = new FormData();

    for (let i = 0; i < postFile.length; i++) {
      formData.append('ReviewImage', postFile[i]);
    }
    formData.append('content', comment);
    formData.append('grade', rate);
    formData.append('account_id', 7);

    return formData;
  };

  // 리뷰 등록
  const addReview = async () => {
    const formData = makeFormData();

    const res = await postReview(formData);
    if (res) {
      window.location.reload();
    }
  };

  return (
    <>
      <TopContainer>
        <Title01>알라딘 온라인매장 구매 회원들이 평가한 평균 별점</Title01>
        <RatingStars type="readBig" rate={avgRate} />
      </TopContainer>
      <InputContainer>
        <RatingStars setRate={setRate} />
        <AlignCenter>
          <InputBox
            placeholder="해당 상품을 구매하셨나요? 감상평을 남겨주세요."
            onChange={handleChange}
            value={comment}
          />
          <TextCounter>{count}/50</TextCounter>
          <WriteBtn onClick={addReview}>작성하기</WriteBtn>
        </AlignCenter>
      </InputContainer>
      <FileUpload file={file} setFile={setFile} postFile={postFile} setPostFile={setPostFile} />
      <SortingBtns style={{justifyContent: 'flex-end', margin: '20px 0 24px 0', width: '1200px'}} sorting={sorting} />
      <ReviewContainer>
        {review.length > 0 ? (
          review.map((it) => (
            <ReviewItem key={`review_${it.review_id}`}>
              <Date>{it.created_at.substring(0, 10)}</Date>
              <ReviewContent>{it.content}</ReviewContent>
              <CommentPics>
                {it.images.map((it) => (
                  <FileLoader key={`img_${it}`} src={it.imageUrl} alt="img" />
                ))}
              </CommentPics>
              <RatingStars type="readSmall" rate={it.grade} />
              {/* 해당 유저의 댓글만 삭제하도록 */}
              {it.account_id == accountId && <DeleteBtn className="delete" onClick={handleDelete} id={it.review_id} />}
            </ReviewItem>
          ))
        ) : (
          <div style={{color: 'grey', padding: '10px 0 0 10px'}}>아직 작성된 리뷰가 없습니다.</div>
        )}
      </ReviewContainer>
    </>
  );
};

export default Review;

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
  font-family: Pretandard;
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
  .delete {
    position: absolute;
    right: 23px;
    bottom: 23px;
    cursor: pointer;
  }
`;

const Date = styled.label`
  display: flex;
  align-items: center;
  height: 31px;
  color: var(--02, #999);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReviewContent = styled.p`
  margin: 0;
  padding: 0;
  color: var(---, #010101);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
