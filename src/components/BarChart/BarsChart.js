import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import BarChart from './BarChart';
const BarWrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 100%;
  min-width: 640px;
  display: flex;
  padding: 40px 0px;
  background: #bbb;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const BarCapture = styled.div`
  font-size: 30px;
  width: 100%;
  text-align: center;
`;
const BarsChart = () => {
  const weatherForecasts = useSelector((state) => state.weatherReducers);
  const { weatherForecast = [] } = weatherForecasts;
  return (
    <>
      {weatherForecast.length !== 0 && (
        <BarWrapper>
          <BarCapture>天氣預報——最高溫度、最低溫度</BarCapture>
          <BarChart target="min_temp" />
          <BarChart target="max_temp" />
        </BarWrapper>
      )}
    </>
  );
};

export default BarsChart;
