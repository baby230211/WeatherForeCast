import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import Legend from './Legend';
import YCoordinates from './YCoordinates';
import Bars from './Bars';
const Container = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 600px;
  height: 300px;
  position: relative;
  padding: 75px 20px 50px;
  border: 1px solid black;
  text-align: left;
  font-size: 12px;
`;

const Chart = ({ target }) => {
  const weatherForecasts = useSelector((state) => state.weatherReducers);
  const { weatherForecast = [] } = weatherForecasts;
  const temp = weatherForecast.map((forecast) => {
    return forecast[target];
  });
  const min = (temp && Math.floor(Math.min(...temp))) || 0;
  return (
    <>
      {weatherForecast.length !== 0 && (
        <Container>
          <YCoordinates min={min} />
          <Legend target={target} />
          <Bars target={target} weatherForecast={weatherForecast} min={min} />
        </Container>
      )}
    </>
  );
};

export default Chart;
