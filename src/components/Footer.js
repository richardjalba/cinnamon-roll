import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterS>
      <h3>
        <div>&#169; {new Date().getFullYear()} </div> <span /> Cinnamon Roll
        Studios
      </h3>
    </FooterS>
  );
};

const FooterS = styled.div`
  font-family: 'Mitr', sans-serif;
  height: 10vh;
  background: rgb(43, 24, 56);
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  font-size: auto;
  color: white;
  span {
    margin: 0.2rem;
  }
  h3 {
    display: flex;
    font-size: 2rem;
  }

  @media (max-width: 540px) {
    height: 11vh;
    h3 {
      display: flex;
      font-size: 1.3rem;
      padding: 0;
    }
  }
`;

export default Footer;
