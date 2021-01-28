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
  height: 20vh;
  background: rgb(43, 24, 56);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  span {
    margin: 0.2rem;
  }
  h3 {
    display: flex;
  }
`;

export default Footer;
