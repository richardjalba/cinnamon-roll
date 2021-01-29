import { React } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//
import { Link } from 'react-router-dom';
//
import headerlogo from '../img/cinnamon-header.jpg';

const Nav = () => {
  return (
    <StyledNav>
      <div>
        <Link id='logo' to='/'>
          <img id='headerlogo' src={headerlogo} alt='' />
        </Link>
      </div>

      <div id='nav-container'>
        <div id='capture-nav'>
          <ul>
            {/* <li>
              <Link to=''>Twitter</Link>
            </li>
            <li>
              <Link to=''>Instagram</Link>
            </li> */}
            <li>
              <a href='https://www.kickstarter.com/projects/440368091/legends-and-lore-the-vr-5e-compatible-role-playing-game'>
                KICKSTARTER
              </a>
            </li>
            <li>
              <Link to='/'>EMAIL LIST</Link>
            </li>
          </ul>
        </div>

        <div id='main-nav'>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/work'>GAMES</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 10rem 0rem 10rem;
  background: rgb(43, 24, 56);
  /* font-family: 'Balsamiq Sans', cursive; */
  font-family: 'Mitr', sans-serif;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.9rem;
  }
  a:hover {
    color: rgb(255, 175, 125);
  }
  ul {
    display: flex;
    list-style: none;
    float: right;
  }
  #headerlogo {
    width: 100%;
  }
  #logo {
    font-size: 3rem;
    font-weight: lighter;
    color: rgb(255, 145, 74);
  }
  li {
    padding-left: 3rem;
    position: relative;
  }
  #capture-nav a {
    font-size: 1.3rem;
    color: rgb(255, 145, 74);
    font-weight: 700;
  }
  #capture-nav a:hover {
    color: rgb(255, 175, 125);
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Nav;
