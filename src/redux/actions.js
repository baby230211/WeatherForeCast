import { FETCH_WEATHER_ID, FETCH_WEATHER } from './types';
import weatherApi from '../api/weatherApi';

export const fetchWeatherId = (locationName) => async (dispatch, getState) => {
  // output : id string
  const res = await weatherApi.get(`/search/?query=${locationName}`);
  const [data] = res.data;
  if (!data) throw new Error({ message: 'Please Enter correct location' });
  const { woeid } = data;

  dispatch({
    type: FETCH_WEATHER_ID,
    payload: woeid,
  });
};

export const fetchWeather = () => async (dispatch, getState) => {
  // output :{
  //   id:string,
  //   weather_state_name:string,
  //   humidity:number,
  //   applicable_data:string,
  //   max_temp:number,
  //   min_temp:number,
  //   predictability:number}[]
  const locationId = getState().weatherReducers.locationId;
  if (!locationId) return;
  const res = await weatherApi.get(`/${locationId}`);
  const data = res.data;
  const { consolidated_weather } = data;
  const usefulData = consolidated_weather.reduce((accum, current, index) => {
    // 取五天
    if (index === 0) {
      return accum;
    }
    const {
      id,
      weather_state_name,
      humidity,
      applicable_date,
      max_temp,
      min_temp,
      predictability,
    } = current;
    accum.push({
      id,
      weather_state_name,
      humidity,
      applicable_date,
      max_temp,
      min_temp,
      predictability,
    });
    return accum;
  }, []);
  dispatch({
    type: FETCH_WEATHER,
    payload: usefulData,
  });
};
