import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
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

const PieChart = ({ currentForeCasts }) => {
  const humidity2 = currentForeCasts.map((forecast) => {
    return {
      applicable_date: forecast['applicable_date'],
      humidity: forecast['humidity'],
    };
  });
  return (
    <>
      {currentForeCasts.length !== 0 && (
        <PieWrapper>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: 30,
              marginBottom: 20,
            }}
          >
            Humidity
          </div>
          {humidity2.map(({ humidity, applicable_date }) => (
            <PieContainer>
              <div
                style={{
                  paddingBottom: 20,
                  fontSize: 20,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {applicable_date}
              </div>
              <Pie p={humidity} />
            </PieContainer>
          ))}
        </PieWrapper>
      )}
    </>
  );
};

export default PieChart;
