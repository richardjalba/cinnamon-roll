import React from 'react';
import styled from 'styled-components';

const TeamSection = () => {
  return (
    <StyledTeam>
      <div className='team-entry'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg'
          alt=''
        />
        <div className='desc'>
          <a href='/'>
            <h1>NAME</h1>
            <h3>Position</h3>
          </a>
          <p>
            A player-driven role-playing game where every playthrough is
            different.
          </p>
        </div>
      </div>
      <div className='team-entry'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg'
          alt=''
        />
        <div className='desc'>
          <a href='/'>
            <h1>NAME</h1>
            <h3>Position</h3>
          </a>
          <p>
            A player-driven role-playing game where every playthrough is
            different.
          </p>
        </div>
      </div>

      <div className='team-entry'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg'
          alt=''
        />
        <div className='desc'>
          <a href='/'>
            <h1>NAME</h1>
            <h3>Position</h3>
          </a>
          <p>
            A player-driven role-playing game where every playthrough is
            different.
          </p>
        </div>
      </div>
      <div className='team-entry'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg'
          alt=''
        />
        <div className='desc'>
          <a href='/'>
            <h1>NAME</h1>
            <h3>Position</h3>
          </a>
          <p>
            A player-driven role-playing game where every playthrough is
            different.
          </p>
        </div>
      </div>
    </StyledTeam>
  );
};

const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
  padding: 10px;

  .team-entry {
    display: flex;
    font-family: 'Mitr', sans-serif;
  }
  .desc h1,
  h3 {
    padding: 0;
    margin: 0;
  }
  .team-entry a {
    color: rgb(43, 24, 56);
    text-decoration: none;
  }
  .team-entry a:hover {
    color: rgb(79, 58, 94);
    text-decoration: underline;
  }
  .team-entry p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
  }
  .team-entry img {
    width: 12vw;
    height: 30vh;
    margin: 1rem;
  }
  #section-img {
    display: block;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
  }

  @media (max-width: 720px) {
    width: 100%;
    .team-entry img {
      width: auto;
      height: 30vh;
      margin: 0.5rem;
    }
  }
`;

export default TeamSection;
