import React from 'react';
import styled from 'styled-components';
import secimg from '../img/cinnamon-roll.jpg';

const ContactDetailSection = () => {
  return (
    <ContactDetailStyle>
      <div className='posting'>
        <h2>GENERAL ENQUIRIES</h2>
        <p>
          If you have an insatiable burning desire to contact us about anything,
          other than the topics below, then you can mail us here:
        </p>
        <h2>PRESS PEEPS</h2>
        <p>
          If you’re looking to contact us regarding anything to do with press
          type stuff then this is the email address you are looking for:
        </p>
        <h2>GAMES BIZ</h2>
        <p>
          If you work in the games industry and would like to discuss business
          things with us then go ahead and contact us here:
        </p>
        <h2>JOBS</h2>
        <p>
          Up-to-date hiring information can be found over on our About page.
        </p>
      </div>
      <img id='section-img' src={secimg} alt='' />
    </ContactDetailStyle>
  );
};

const ContactDetailStyle = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  margin: 5% 10%;
  padding: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 1.3rem;
  color: rgb(43, 24, 56);

  h1 {
    font-family: 'Mitr', sans-serif;
  }

  p,
  h2 {
    text-align: left;
  }
  li {
    text-align: left;
  }
  img {
    width: 30vw;
    margin-left: 10px;
  }

  @media (max-width: 700px) {
    #section-img {
      display: none;
    }
  }
`;

export default ContactDetailSection;
