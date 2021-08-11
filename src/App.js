import React from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart/PieChart';
import WeatherSettings from './components/WeatherSettings';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const App = () => {
  return (
    <Wrapper>
      {console.log('render')}
      <WeatherSettings />
      <BarChart target="max_temp" />
      <BarChart target="min_temp" />
      <PieChart />
    </Wrapper>
  );
};

export default App;
