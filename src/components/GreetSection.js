import React from 'react';
import styled from 'styled-components';
import crslogo from '../img/cinnamon roll logo tagline.PNG';
import ll from '../img/legends-and-lore-vr.jpg';

const GreetSection = () => {
  return (
    <GreetStyle>
      <div id='mission'>
        <h1>OUR MISSION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          asperiores laboriosam natus commodi aut, atque quo molestiae. Iure,
          voluptates quia nam dolorem maiores magni ducimus! Vitae a omnis quia
          blanditiis.
        </p>
      </div>

      <div id='crs-logo'>
        <img src={crslogo} alt='' />
      </div>

      <div id='box-img'>
        <h3>OUR CURRENT PROJECT</h3>
        <div className='box'>
          <img src={ll} alt='' />
          <a href='https://legendsandlorevr.com/'>
            <p>SEE MORE</p>
          </a>
        </div>
      </div>
    </GreetStyle>
  );
};

const GreetStyle = styled.div`
  display: flex;
  flex: column;
  justify-content: center;
  margin: 5% 0%;
  width: 100vw;
  overflow: hidden;
  font-family: 'Mitr', sans-serif;
  color: rgb(43, 24, 56);

  #mission {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding: 0 5%; */
    align-items: center;
    height: 60vh;
    width: 27%;
  }
  #mission p {
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
  }
  #crs-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;
    width: 36%;
    margin: 0 2%;
  }
  #crs-logo img {
    width: 100%;
    max-width: 50vh;
  }
  #box-img {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 27%;
    margin: 0;
  }
  #box-img img {
    width: 100%;
    border-radius: 10px;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid; */
  }
  a {
    color: rgb(214, 97, 19);
    text-decoration: none;
  }

  /* @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  #mission {
    padding: 0px;
    margin: 0px;
    width: 100vw;
    height: 40vh;
    align-items: center;
  }
  #mission p {
    padding: 0 10%;
  }
  #crs-logo img {
    position: absolute;
    right: 30%;
  }
  #box-img {
    margin-left: 40%;
    margin-top: 20px;
  }
  #box-img img {
    height: 40vh;
    width: 45vw;
  } */
`;

export default GreetSection;
