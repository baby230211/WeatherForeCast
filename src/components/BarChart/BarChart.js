import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import Legend from './Legend';
import YCoordinates from './YCoordinates';
import Bars from './Bars';
const Container = styled.div`
  margin: 10px;
  margin-top: 50px;
  width: 600px;
  height: 300px;
  min-width: 600px;
  box-shadow: 0 0 10px 0 #555;
  position: relative;
  padding: 75px 20px 50px;
  text-align: left;
  font-size: 12px;
  background: white;
`;
const Capture = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;

  padding-top: 10px;
  letter-spacing: 0.3rem;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const BarChart = ({ target }) => {
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
          <Capture>{target}</Capture>
          <YCoordinates min={min} />
          <Legend target={target} />
          <Bars target={target} weatherForecast={weatherForecast} min={min} />
        </Container>
      )}
    </>
  );
};

export default BarChart;
