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
  width: 95vw;
  overflow: hidden;
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

  @media (max-width: 1024px) {
    margin: 10px;
    .game-entry img {
      width: 40vw;
      height: 25vh;
    }
    #section-img {
      width: 70%;
      height: auto;
    }
    .desc p {
      width: 85%;
    }
  }

  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .game-entry {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 0;
    }
    .desc {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .desc h1,
    p {
      margin: 0;
    }
    .game-entry img {
      width: 70%;
      height: auto;
    }
  }
`;

export default GamesSection;
