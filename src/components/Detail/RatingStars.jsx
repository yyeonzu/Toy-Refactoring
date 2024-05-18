import styled from 'styled-components';
import {PiStarFill} from 'react-icons/pi';
import {useEffect, useState} from 'react';

const RatingStars = ({type, rate}) => {
  const state = [1, 2, 3, 4, 5];
  const [target, setTarget] = useState([0, 0, 0, 0, 0]);

  const AVG_RATE = rate * 20;
  const [rates, setRates] = useState([0, 0, 0, 0, 0]);

  const calcStarRates = () => {
    let tempRates = [0, 0, 0, 0, 0];
    let starScore = (AVG_RATE * 70) / 100; // 별 5개 총 70, 100점 만점에 비율 맞춤.
    let idx = 0;
    while (starScore > 14) {
      // 각 별에 채워질 width
      tempRates[idx] = 14;
      idx += 1;
      starScore -= 14;
    }
    tempRates[idx] = starScore; // 남은 별점
    return tempRates;
  };

  useEffect(() => {
    setRates(calcStarRates);
  }, []);

  const clickStar = (e) => {
    console.log(e.target.id);
    const newArr = [...target];
    for (let i = 0; i < Number(e.target.id); i++) {
      newArr[i] = 1;
    }
    for (let i = Number(e.target.id); i < 5; i++) {
      newArr[i] = 0;
    }
    console.log(newArr);
    setTarget(newArr);
  };

  useState(() => {
    for (let i = 0; i < 5; i++) {
      if (target[i] === 1) {
        document.getElementById(String(i + 1)).style.fill = '#ea328f';
      }
    }
  }, [target]);

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
        <Stars>
          <FilledStar id="1" onClick={clickStar} />
          <FilledStar id="2" onClick={clickStar} />
          <FilledStar id="3" onClick={clickStar} />
          <FilledStar id="4" onClick={clickStar} />
          <FilledStar id="5" onClick={clickStar} />
        </Stars>
      ) : (
        <WriteStars>
          {/* {target.map((it, idx) => {
                <svg id={idx} onClick={clickStar} xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 14 13' fill='grey'>
            <path
                             
                            d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                            transform='translate(-2 -2)'
                        />
            </svg>
            })} */}

          <FilledStar id="1" onClick={clickStar} />
          <FilledStar id="2" onClick={clickStar} />
          <FilledStar id="3" onClick={clickStar} />
          <FilledStar id="4" onClick={clickStar} />
          <FilledStar id="5" onClick={clickStar} />
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
  position: relative;
  gap: 8px;
`;

const WriteStars = styled.div`
  position: absolute;
  top: 21px;
  right: 238px;
`;

const FilledStar = styled(PiStarFill)`
  width: '20px';
  color: grey;
`;

const Rates = styled.label`
  display: flex;
  width: 70px;
  height: 31px;
  margin: 17px 0 0 16px;
  color: #ea328f;
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
