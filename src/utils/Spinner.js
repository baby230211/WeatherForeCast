import React from 'react';
import spinner from './spinner.gif';
import styled from '@emotion/styled';
const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Spinner = () => {
  return (
    <SpinnerWrapper>
      <img src={spinner} alt="Loading..." />
    </SpinnerWrapper>
  );
};

export default Spinner;
