import { FETCH_WEATHER, FETCH_WEATHER_ID } from './types';

const initialState = {};

export const weatherReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_ID:
      return {
        ...state,
        locationId: action.payload,
      };
    case FETCH_WEATHER:
      return {
        ...state,
        weatherForecast: action.payload,
      };
    default:
      return state;
  }
};
