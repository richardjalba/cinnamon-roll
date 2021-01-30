import React from 'react';
import styled from 'styled-components';

const ContactSection = () => {
  return (
    <ContactSectionS>
      <h2>CONTACT US</h2>
    </ContactSectionS>
  );
};

const ContactSectionS = styled.div`
  background: white;
  margin: 0;
  padding: 0;
  height: 6em;
  display: flex;
  width: 100vw;
  overflow: hidden;
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

export default ContactSection;
