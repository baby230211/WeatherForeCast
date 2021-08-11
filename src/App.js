import './App.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Chart from './components/Chart';
import useWeatherApi from './hooks/useWeatherApi';
import PieChart from './components/PieChart';
import { useDispatch, useSelector } from 'react-redux';
import WeatherSettings from './components/WeatherSettings';

const App = () => {
  const weathers = useSelector((globalState) => globalState.weatherReducers);
  console.log(weathers);
  const { weatherForecast = [] } = weathers;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {console.log('render')}
      <WeatherSettings />
      <Chart currentForeCasts={weatherForecast} target="max_temp" />
      <Chart currentForeCasts={weatherForecast} target="min_temp" />
      <PieChart currentForeCasts={weatherForecast} />
    </div>
  );
};

export default App;
