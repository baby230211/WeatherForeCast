import { useCallback, useState, useEffect } from 'react';

const useWeatherApi = (locationName) => {
  const [currentForeCasts, setCurrentForecasts] = useState({
    weatherForeCast: [],
    isLoading: true,
  });

  const fetchWeatherForeCast = async (locationId) => {
    try {
      if (!locationId) return [];
      const res = await fetch(
        `https://www.metaweather.com/api/location/${locationId}/`
      );
      const data = await res.json();
      const weatherForecast = data.consolidated_weather?.reduce(
        (accumulator, item, index) => {
          // 取五個
          if (index === 0) return accumulator;
          const { humidity, applicable_date, max_temp, min_temp } = item;
          accumulator.push({
            applicable_date,
            humidity,
            max_temp,
            min_temp,
          });

          return accumulator;
        },
        []
      );
      return weatherForecast;
    } catch (error) {
      console.error(error);
      setCurrentForecasts((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };
  const fetchWeatherId = async (locationName) => {
    try {
      const res = await fetch(
        `https://www.metaweather.com/api/location/search/?query=${locationName}`
      );
      const data = await res.json();
      if (data.length !== 0) {
        return data[0].woeid;
      }
      setCurrentForecasts((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    } catch (error) {
      console.error(error);
      setCurrentForecasts((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };
  const fetchData = useCallback(() => {
    const fetchingData = async () => {
      const locationId = await fetchWeatherId(locationName); // put location Name
      const weatherForeCast = await fetchWeatherForeCast(locationId);
      setCurrentForecasts({ weatherForeCast, isLoading: false });
    };
    if (!locationName) return;
    setCurrentForecasts((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    fetchingData();
  }, [locationName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return [currentForeCasts, fetchData];
};

export default useWeatherApi;
