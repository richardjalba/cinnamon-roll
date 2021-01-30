import React from 'react';
import styled from 'styled-components';

const WorkSection = () => {
  return (
    <WorkSectionS>
      <h2>RECENT GAMES AND MEDIA</h2>
    </WorkSectionS>
  );
};

const WorkSectionS = styled.div`
  background: white;
  width: 100%;
  overflow: hidden;
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

export default WorkSection;
