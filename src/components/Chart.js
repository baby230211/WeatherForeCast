import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
const ChartContainer = styled.div`
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
const NumberContainer = styled.ul`
  float: left;
  height: 100%;
  width: 50px;
`;
const List = styled.li`
  height: 150px;
  position: relative;
  bottom: 145px;
  span {
    position: absolute;
    bottom: 0px;
    right: 10px;
    font-size: 12px;
    font-weight: 600;
  }
`;
const Capture = styled.ul`
  position: absolute;
  right: 70px; /* remained 50px + pd 20px */
  top: 70px;
  transform: translateY(-100%);
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    background-color: #17c0eb;
  }
`;

const Bars = styled.ul`
  display: inline-table;
  width: 500px;
  vertical-align: top;
  height: 100%;
  position: relative;
  background-image: repeating-linear-gradient(
    to top,
    #fff,
    #fff 28px,
    #bbb 28px,
    #bbb 30px
  );
  border-bottom: 2px solid #bbb;
`;
const draw = keyframes`
  0%{
    height:0;
  }
`;
const Bar = styled.div`
  height: ${(props) => props.height || 0};
  width: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #17c0eb;
  animation: ${draw} 1s ease-in-out;

  &::before {
    content: attr(data-percentage) '°C';
    position: relative;
    text-align: center;
    display: inline-block;
    width: 100%;
    bottom: 20px;
  }
`;

const Categories = styled.li`
  display: table-cell;
  table-layout: fixed;
  position: relative;

  span {
    position: absolute;
    bottom: -30px;
    left: 0px;
    width: 100%;
    text-align: center;
  }
`;
const Chart = ({ currentForeCasts, target }) => {
  const temp = currentForeCasts.map((forecast) => {
    return forecast[target];
  });
  const min = (temp && Math.floor(Math.min(...temp)) - 5) || 0;
  return (
    <>
      {currentForeCasts.length !== 0 && (
        <ChartContainer>
          <NumberContainer>
            <List>
              <span>{min + 10}°C</span>
            </List>
            <List>
              <span>{min + 5}°C</span>
            </List>
            <List>
              <span>{min}°C</span>
            </List>
          </NumberContainer>
          <Capture>
            <span>{target}</span>
          </Capture>
          <Bars>
            {currentForeCasts.map((forecast) => {
              const temp = Math.floor(forecast[target] * 100) / 100;
              return (
                <Categories key={forecast.applicable_date}>
                  <Bar
                    height={`${((temp - min) / 10) * 100}%`}
                    data-percentage={temp}
                  ></Bar>
                  <span>{forecast.applicable_date}</span>
                </Categories>
              );
            })}
          </Bars>
        </ChartContainer>
      )}
    </>
  );
};

export default Chart;
