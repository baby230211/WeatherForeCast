import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const Pie = styled.div`
  width: 150px;
  height: 150px;
`;
const PieInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  background: gray;
  border-radius: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  transform: translate(-50%, -50%);
  z-index: 30;
`;

const runRotate = keyframes`
  0%{
    transform:rotate(0deg)
  }
`;
const runOpacity = keyframes`
  0%{
    opacity:1
  }
  100%{
    opacity:0
  }
`;
const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: white;
  position: relative;
  overflow: hidden;
`;
const BarOrigin = styled.div`
  width: 50%;
  height: 100%;
  background: white;
  position: absolute;
  z-index: 20;
  opacity: 1;
  animation-delay: 1s;
  animation-duration: 0s;
  animation-name: ${(props) => (props.percentage > 180 ? runOpacity : '')};
  animation-fill-mode: forwards;
`;
const BarLeft = styled.div`
  width: 50%;
  height: 100%;
  background: #17c0eb;
  position: absolute;
  transform: ${(props) => `rotate(${props.percentage}deg)`};
  transform-origin: right center;
  animation: ${runRotate} linear;
  animation-duration: ${(props) => `${props.percentage / 180}s`};
  z-index: 12;
`;
const BarRight = styled.div`
  width: 50%;
  height: 100%;
  background: #17c0eb;
  position: absolute;
  transform: ${(props) =>
    props.percentage > 180
      ? `rotate(180deg)`
      : `rotate(${props.percentage}deg)`};
  transform-origin: right center;
  animation: ${runRotate} linear;
  animation-duration: 1s;
  z-index: 10;
`;
const PieContainer = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;
const DateText = styled.div`
  padding-bottom: 20px;
  font-size: 20px;
  text-align: center;
`;
const PieCircle = ({ p, applicable_date }) => {
  const [count, setCount] = useState(1);
  const degree = (p * 360) / 100;
  useEffect(() => {
    if (!p) return;
    let id = setInterval(() => {
      setCount((prev) => ++prev);
    }, 1000 / p);
    if (count === p) {
      clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [count, p]);
  if (!p) {
    return <></>;
  }

  return (
    <PieContainer>
      <DateText>{applicable_date}</DateText>
      <Pie>
        <Circle>
          <PieInner>{count}%</PieInner>
          <BarOrigin percentage={degree}></BarOrigin>
          <BarLeft percentage={degree} />
          <BarRight percentage={degree} />
        </Circle>
      </Pie>
    </PieContainer>
  );
};

export default PieCircle;
