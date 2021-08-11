import React from 'react';
import styled from '@emotion/styled';

const LegendContainer = styled.ul`
  position: absolute;
  right: 70px; /* remained 50px + pd 20px */
  top: 70px;
  transform: translateY(-100%);
`;
const LegendTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    background-color: #17c0eb;
  }
`;
const Legend = ({ target }) => {
  return (
    <LegendContainer>
      <LegendTitle>{target}</LegendTitle>
    </LegendContainer>
  );
};

export default Legend;
