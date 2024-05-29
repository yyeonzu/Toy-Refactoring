import styled from 'styled-components';
import {PiStarFill} from 'react-icons/pi';
import {useEffect, useState} from 'react';

const RatingStars = ({type, rate, setRate}) => {
  const state = [1, 2, 3, 4, 5];

  // 평균 별점 색칠
  const AVG_RATE = rate * 20;
  const [rates, setRates] = useState([0, 0, 0, 0, 0]);

  const calcStarRates = () => {
    let tempRates = [0, 0, 0, 0, 0];
    let starScore = rate ? ((AVG_RATE * 70) / 100).toFixed(1) : 0; // 별 5개 총 70, 100점 만점에 비율 맞춤.
    let idx = 0;
    while (starScore > 14) {
      // 각 별에 채워질 width
      tempRates[idx] = 14;
      idx += 1;
      starScore -= 14;
    }
    tempRates[idx] = starScore; // 남은 별점
    console.log(tempRates);
    setRates(tempRates);
  };

  useEffect(() => {
    if (type === 'readBig') {
      calcStarRates();
    }
  }, [rate]);

  // 별점 작성
  const clickStar = (e) => {
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      i < Number(e.target.id) ? newArr.push(1) : newArr.push(0);
    }
    newArr.map((it, idx) =>
      it === 1
        ? (document.getElementById(`${idx + 1}`).style.fill = '#ea328f')
        : (document.getElementById(`${idx + 1}`).style.fill = 'grey')
    );
    setRate(Number(e.target.id));
  };

  // 댓글 읽기 작은 별점
  const returnSmallStar = () => {
    const rateList = [];
    for (let i = 0; i < 5; i++) {
      i < rate ? rateList.push(<FilledStar color="#ea328f" />) : rateList.push(<FilledStar />);
    }
    return rateList;
  };

  return (
    <>
      {type === 'readBig' ? (
        <ReadStars>
          {state.map((item, idx) => {
            return (
              <span className="star_icon" key={`${item}_${idx}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 13" fill="grey">
                  <clipPath id={`${item}StarClip`}>
                    {/* 새로 생성한 리스트에서 별 길이를 넣어줍니다. */}
                    <rect width={`${rates[idx]}`} height="40" />
                  </clipPath>
                  <path
                    id={`${item}Star`}
                    d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                    transform="translate(-2 -2)"
                  />
                  <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill="#ea328f" />
                </svg>
              </span>
            );
          })}
          <Rates>{rate}/5.0</Rates>
        </ReadStars>
      ) : type === 'readSmall' ? (
        <Stars>{returnSmallStar()}</Stars>
      ) : (
        <WriteStars>
          {state.map((it, idx) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 14 13"
              fill="grey"
              cursor="pointer"
            >
              <path
                id={idx + 1}
                onClick={clickStar}
                d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                transform="translate(-2 -2)"
              />
            </svg>
          ))}
        </WriteStars>
      )}
    </>
  );
};

export default RatingStars;

const Stars = styled.div`
  display: flex;
  position: absolute;
  top: 21px;
  right: 22px;
`;
const ReadStars = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 8px;
`;

const WriteStars = styled.div`
  display: flex;
  gap: 3px;
  position: absolute;
  top: 21px;
  right: 238px;
`;

const FilledStar = styled(PiStarFill)`
  width: 20px;
  color: ${(props) => (props.color ? props.color : 'gray')};
`;

const Rates = styled.label`
  display: flex;
  width: 70px;
  height: 31px;
  margin: 17px 0 0 16px;
  color: #ea328f;
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
