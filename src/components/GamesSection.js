import React from 'react';
import styled from 'styled-components';
import img from '../img/legends-and-lore-vr.jpg';
import secimg from '../img/cinnamon-roll.jpg';

const GamesSection = () => {
  return (
    <GamesSectionS>
      <div className='game-entry'>
        <img src={img} alt='' />
        <div className='desc'>
          <a href='https://legendsandlorevr.com/'>
            <h1>LEGENDS & LORE</h1>
          </a>
          <p>
            A player-driven role-playing game where every playthrough is
            different.
          </p>
        </div>
      </div>

      <img id='section-img' src={secimg} alt='' />
    </GamesSectionS>
  );
};

const GamesSectionS = styled.div`
  margin: 5% 10% 0 10%;

  .game-entry {
    display: flex;
    font-family: 'Mitr', sans-serif;
  }
  .game-entry a {
    color: rgb(43, 24, 56);
    text-decoration: none;
  }
  .game-entry a:hover {
    color: rgb(79, 58, 94);
    text-decoration: underline;
  }
  .game-entry p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
  }
  .game-entry img {
    width: 35vw;
    margin: 1rem;
  }
  #section-img {
    display: block;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
  }
`;

export default GamesSection;
