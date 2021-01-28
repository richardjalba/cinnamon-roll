import React from 'react';
import styled from 'styled-components';

const JoinDetailsSection = () => {
  return (
    <JoinDetailsStyle>
      <div>
        <p>
          Cinnamon Roll Studios are an independent virtual reality developer.
          Our aim is to bring fun games that everyone loves to play to new and
          old audiences alike across multiple platforms! <br />
          <br /> Our core team of veterans mixed with fresh, youthful talent has
          collectively notched up hundreds of years of videogame development.{' '}
          <br />
          <br /> Our first release as Cinnamon Roll Studios is{' '}
          <b>Legends & Lore</b>, launched in 2021, and funded by Kickstarter!
          We’re based in the heart of California within easy commuting distance
          of Los Angeles.
        </p>
      </div>

      <div className='posting'>
        <h2>CURRENT VACANCIES</h2>
        <ul>
          <li>Experienced Technical Generalist Engineer</li>
          <li>Experienced Gameplay Engineer</li>
          <li>Experienced Technical Artist </li>
        </ul>
        <h2>CONTACT US</h2>
        <p>
          Interested in working at Cinnamon Roll Studios? <br />
          <br /> Drop us an email introducing yourself over at
          jobs@cinnamonrollstudios.com. Attach a copy of your CV and any
          portfolio work you wish to share! Including the type of role you’re
          after in the subject line would be ace too!
        </p>
      </div>
    </JoinDetailsStyle>
  );
};

const JoinDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin: 5% 15%;
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

  #details {
    font-family: Arial, Helvetica, sans-serif;
    color: #3b3b3b;
    background: #ffbb00;
    padding: 15px;
    border-radius: 15px;
  }
  p,
  h2 {
    text-align: left;
  }
  li {
    text-align: left;
  }
`;

export default JoinDetailsSection;
