import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import Pie from './Pie';
const PieWrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 100%;
  min-width: 640px;
  position: relative;
  display: flex;
  background: #bbb;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-size: 12px;
  padding: 40px 0px;
`;

const Title = styled.div`
  padding-bottom: 50px;
  font-size: 30px;
  text-align: center;
  width: 100%;
`;

const PieChart = () => {
  const weatherForecasts = useSelector((state) => state.weatherReducers);
  const { weatherForecast = [] } = weatherForecasts;
  return (
    <>
      {weatherForecast.length !== 0 && (
        <PieWrapper>
          <Title>天氣預報 —— 濕 度</Title>
          {weatherForecast.map(({ id, humidity, applicable_date }) => (
            <Pie key={id} p={humidity} applicable_date={applicable_date} />
          ))}
        </PieWrapper>
      )}
    </>
  );
};

export default PieChart;
