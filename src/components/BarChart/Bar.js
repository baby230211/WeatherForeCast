import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
const draw = keyframes`
  0%{
    height:0;
  }
`;
const Bar = styled.div`
  height: ${(props) => props.height || 0};
  width: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #17c0eb;
  animation: ${draw} 1s ease-in-out;

  &::before {
    content: attr(data-percentage) '°C';
    position: relative;
    text-align: center;
    display: inline-block;
    width: 100%;
    bottom: 20px;
  }
`;

const Categories = styled.li`
  display: table-cell;
  table-layout: fixed;
  position: relative;
`;
const DateText = styled.span`
  position: absolute;
  bottom: -30px;
  left: 0px;
  width: 100%;
  text-align: center;
`;
const BarChart = ({ temp, height, applicable_date }) => {
  return (
    <Categories>
      <Bar height={height} data-percentage={temp}></Bar>
      <DateText>{applicable_date}</DateText>
    </Categories>
  );
};

export default BarChart;
