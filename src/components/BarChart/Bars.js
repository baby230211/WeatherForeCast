import React from 'react';
import Bar from './Bar';
import styled from '@emotion/styled';
const BarsContainer = styled.ul`
  display: inline-table;
  width: 500px;
  vertical-align: top;
  height: 100%;
  position: relative;
  background-image: repeating-linear-gradient(
    to top,
    #fff,
    #fff 28px,
    #bbb 28px,
    #bbb 30px
  );
  border-bottom: 2px solid #bbb;
`;
const Bars = ({ weatherForecast, min, target }) => {
  return (
    <BarsContainer>
      {weatherForecast.map((forecast) => {
        const { applicable_date, id } = forecast;
        const temp = Math.floor(forecast[target] * 100) / 100;
        const height = `${((temp - min) / 10) * 100}%`;
        return (
          <Bar
            key={id}
            temp={temp}
            height={height}
            applicable_date={applicable_date}
          />
        );
      })}
    </BarsContainer>
  );
};

export default Bars;
