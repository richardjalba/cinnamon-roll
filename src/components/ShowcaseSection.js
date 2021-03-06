import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import img from '../img/legends-and-lore-vr.jpg';
import bg from '../img/llbg.PNG';
import title from '../img/legends-lore.jpg';

const ShowcaseSection = () => {
  return (
    <ShowcaseSectionS>
      <h1>WATCH THE TRAILER!</h1>
      <div id='ll'>
        <img id='ll-title-img' src={title} alt='' srcset='' />
        <ReactPlayer
          className='react-player player-wrapper'
          url='hhttps://youtu.be/rqLvxOXKk5A'
          width='100%'
          height='45vh'
        />
      </div>
      <h2>A VR Role-Playing Game... with a Twist!</h2>
    </ShowcaseSectionS>
  );
};

const ShowcaseSectionS = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: 'Mitr', sans-serif;
  color: rgb(43, 24, 56);
  background: white;
  /* background-image: url(${bg}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    margin-top: 5%;
    margin-bottom: 0px;
  }
  h2 {
    margin-bottom: 5%;
  }
  #ll-title-img {
    display: block;
    max-width: 50vw;
    max-height: 95px;
    width: auto;
    height: auto;
    margin-bottom: 1rem;
  }
  #showcase-name {
    padding: 5rem;
  }
  #ll {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: auto;
    width: 80vh;
  }
  #ll img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  @media (max-width: 1024px) {
    #ll {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 65vh;
    }
  }
  /* @media (max-width: 540px) {
    #ll {
      width: 80vw;
      .player-wrapper {
        
      }
    }
  } */
`;

export default ShowcaseSection;
