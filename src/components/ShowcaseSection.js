import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import img from '../img/legends-and-lore-vr.jpg';
import bg from '../img/llbg.PNG';

const ShowcaseSection = () => {
  return (
    <ShowcaseSectionS>
      <h1>WATCH THE TRAILER!</h1>
      <div id='ll'>
        <img src={img} alt='' srcset='' />
        <ReactPlayer url='hhttps://youtu.be/rqLvxOXKk5A' />
      </div>
      <h2>A VR Role-Playing Game... with a Twist!</h2>
    </ShowcaseSectionS>
  );
};

const ShowcaseSectionS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: 'Roboto Slab', serif;
  color: rgb(43, 24, 56);
  background: white;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    margin-top: 5%;
  }
  h2 {
    margin-bottom: 5%;
  }
  img {
    width: 30vw;
  }
  #showcase-name {
    padding: 5rem;
  }
  #ll {
    display: flex;
  }
  #ll img {
    width: 40vw;
    height: 48vh;
  }
`;

export default ShowcaseSection;
