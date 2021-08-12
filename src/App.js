import React from 'react';
import BarsChart from './components/BarChart/BarsChart';
import PieChart from './components/PieChart/PieChart';
import WeatherSettings from './components/WeatherSettings';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
      {console.log('render')}
      <WeatherSettings />
      <BarsChart />
      <PieChart />
    </Wrapper>
  );
};

export default App;
