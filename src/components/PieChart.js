import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pie from './Pie';
const PieWrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 100%;
  min-width: 600px;
  position: relative;
  padding: 75px 20px 50px;
  border: 1px solid black;
  display: flex;
  background: #555;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-size: 12px;
  color: white;
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
          <Title>Humidity</Title>
          {weatherForecast.map(({ id, humidity, applicable_date }) => (
            <Pie key={id} p={humidity} applicable_date={applicable_date} />
          ))}
        </PieWrapper>
      )}
    </>
  );
};

export default PieChart;
