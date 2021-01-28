import React from 'react';
import styled from 'styled-components';

const JoinUsSection = () => {
  return (
    <JoinUsSectionS>
      <h2>JOINING US</h2>
    </JoinUsSectionS>
  );
};

const JoinUsSectionS = styled.div`
  background: white;
  margin: 0;
  padding: 0;
  height: 6em;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: 'Mitr', sans-serif;
  font-size: 1.3rem;
  color: rgb(43, 24, 56);
  background: rgb(190, 160, 255);
  span {
    color: rgb(245, 100, 10);
  }
  img {
    width: 5vw;
  }
`;

export default JoinUsSection;