import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { fetchWeather, fetchWeatherId } from '../redux/actions';
import Spinner from '../utils/Spinner';

const WeatherSettingWrapper = styled.div`
  position: relative;
  min-width: 600px;
  margin: auto;
  box-shadow: 0 0 10px #555;
  padding: 20px;
`;
const StyledInputList = styled.input`
  display: block;
  box-sizing: border-box;
  background: transparent;
  outline: none;
  width: 100%;
  max-width: 100%;
  font-size: 16px;
  padding: 7px 10px;
  margin-bottom: 20px;
`;
const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 30px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Query = styled.button`
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  margin: 0px;
  cursor: pointer;
  border: 1px solid transparent;
  justify-content: center;
  height: 35px;
  width: 80px;
  border-radius: 5px;
`;
const Error = styled.div`
  display: block;
  height: 20px;
  visibility: ${(props) => (props.errorMessage ? 'visible' : 'hidden')};
  color: red;
  font-size: 14px;
  margin-bottom: 20px;
`;
const Text = styled.div`
  margin-bottom: 30px;
  font-size: 28px;
`;
const WeatherSettings = () => {
  const [inputLocation, setInputLocation] = useState('');
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = async () => {
    if (!inputLocation) return;
    setIsLoading(true);

    try {
      await dispatch(fetchWeatherId(inputLocation));
      await dispatch(fetchWeather());
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const EnterHandler = (e) => {
    if (e.code === 'Enter') {
      clickHandler();
    }
  };
  return (
    <>
      {(isLoading && (
        <WeatherSettingWrapper onKeyPress={EnterHandler}>
          <Spinner />
        </WeatherSettingWrapper>
      )) || (
        <WeatherSettingWrapper onKeyPress={EnterHandler}>
          <Text>設定</Text>
          <StyledLabel htmlFor="location">地區</StyledLabel>
          <StyledInputList
            type="text"
            list="location-list"
            id="location"
            name="location"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            // ref={inputLocationRef}
          />

          <datalist id="location-list">
            <option value="London"></option>
            <option value="Taipei"></option>
            <option value="Tokyo"></option>
          </datalist>
          <Error errorMessage={errorMessage}>{errorMessage}</Error>
          <ButtonWrapper>
            <Query onClick={clickHandler}>查詢</Query>
          </ButtonWrapper>
        </WeatherSettingWrapper>
      )}
    </>
  );
};

export default WeatherSettings;
