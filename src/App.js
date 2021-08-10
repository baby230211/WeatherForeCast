import './App.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Chart from './components/Chart';
import styled from '@emotion/styled';
import useWeatherApi from './hooks/useWeatherApi';
import PieChart from './components/PieChart';

const WeatherSettingWrapper = styled.div`
  position: relative;
  float: left;
  min-width: 600px;
  margin: auto;
  box-shadow: 0 0 10px #555;
  padding: 20px;
`;
const StyledInputList = styled.input``;
const StyledLabel = styled.label``;

const App = () => {
  const [inputLocation, setInputLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [currentForeCasts, fetchData] = useWeatherApi(currentLocation);
  const clickHandler = () => {
    setCurrentLocation(inputLocation);
  };
  const EnterHandler = (e) => {
    if (e.code === 'Enter') {
      clickHandler();
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {console.log('render')}
      <WeatherSettingWrapper onKeyPress={EnterHandler}>
        <div style={{ fontSize: '28px', marginBottom: '30px' }}>設定</div>
        <label
          htmlFor="location"
          style={{ display: 'block', fontSize: '16px', marginBottom: '30px' }}
        >
          地區
        </label>
        <input
          style={{
            display: 'block',
            boxSizing: 'border-box',
            background: 'transparent',
            outline: 'none',
            width: '100%',
            maxWidth: '100%',
            fontSize: '16px',
            padding: '7px 10px',
            marginBottom: '40px',
          }}
          type="text"
          list="location-list"
          id="location"
          name="location"
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
          // ref={inputLocationRef}
        />
        <datalist id="location-list">
          <option value="a"></option>
          <option value="b"></option>
          <option value="c"></option>
          <option value="d"></option>
          <option value="e"></option>
          <option value="aa"></option>
          <option value="aaa"></option>
        </datalist>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              userSelect: 'none',
              whiteSpace: 'nowrap',
              margin: '0px',
              cursor: 'pointer',
              textTransform: 'none',
              border: '1px solid transparent',
              height: '35px',
              width: '80px',
              borderRadius: '5px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={clickHandler}
          >
            查詢
          </button>
        </div>
      </WeatherSettingWrapper>
      <Chart
        currentForeCasts={currentForeCasts.weatherForeCast}
        target="max_temp"
      />
      <Chart
        currentForeCasts={currentForeCasts.weatherForeCast}
        target="min_temp"
      />
      <PieChart currentForeCasts={currentForeCasts.weatherForeCast} />
    </div>
  );
};

export default App;
