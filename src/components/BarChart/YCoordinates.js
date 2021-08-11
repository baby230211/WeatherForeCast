import React from 'react';
import styled from '@emotion/styled';
const NumberContainer = styled.ul`
  float: left;
  height: 100%;
  width: 50px;
`;
const List = styled.li`
  height: 150px;
  position: relative;
  bottom: 145px;
`;
const YCoordinate = styled.span`
  position: absolute;
  bottom: 0px;
  right: 10px;
  font-size: 12px;
  font-weight: 600;
`;
const YCoordinates = ({ min }) => {
  return (
    <NumberContainer>
      <List>
        <YCoordinate>{min + 10}°C</YCoordinate>
      </List>
      <List>
        <YCoordinate>{min + 5}°C</YCoordinate>
      </List>
      <List>
        <YCoordinate>{min}°C</YCoordinate>
      </List>
    </NumberContainer>
  );
};

export default YCoordinates;
