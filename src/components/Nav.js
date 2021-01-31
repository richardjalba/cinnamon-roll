import { React } from 'react';
import styled from 'styled-components';
//
import { Link } from 'react-router-dom';
//
import headerlogo from '../img/cinnamon-header.jpg';

const Nav = () => {
  function clickHandler() {
    console.log('CLICKED');
    document.querySelector('#main-nav').classList.toggle('active');
  }

  return (
    <StyledNav>
      <div>
        <Link id='logo' to='/'>
          <img id='headerlogo' src={headerlogo} alt='' />
        </Link>
      </div>

      <div id='nav-container'>
        <div onClick={clickHandler} className='toggle' id='smallnav'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

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

        <div className='' id='main-nav'>
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

//
///
///
///
//

const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  overflow: hidden;
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
    overflow: hidden;
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
  #smallnav {
    display: none;
  }
  .toggle {
    position: absolute;
    top: 45px;
    right: 5%;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
  }
  #smallnav .bar {
    height: 10%;
    width: 100%;
    margin-bottom: 5px;
    background: white;
    border-radius: 10px;
    z-index: 100;
  }
  // Media Queries
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: row;
    width: 100vw;
    padding: 2rem 1rem;
    justify-content: left;
    #logo {
      display: inline-block;
    }
    #headerlogo {
      width: 45vw;
      margin-right: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
    #capture-nav {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    #smallnav {
      display: flex;
      height: 8%;
      width: 70px;
    }
    #main-nav {
      display: none;
      flex-direction: column;
      align-items: flex-start;
    }
    #main-nav ul {
      flex-direction: column;
      width: 100%;
    }
    #main-nav li {
      text-align: center;
    }
    #main-nav.active {
      display: flex;
      position: absolute;
      overflow: hidden;
      top: 19%;
      right: -10%;
      background: rgb(43, 24, 56);
      height: 45vh;
      width: 120vw;
    }
  }
  @media (max-width: 540px) {
    overflow: hidden;
    #headerlogo {
      width: 65vw;
    }
    #smallnav {
      display: flex;
      height: 5%;
      width: 50px;
    }
    #smallnav .bar {
      height: 10%;
      width: 100%;
      margin-bottom: 5px;
      background: white;
      border-radius: 10px;
      z-index: 100;
    }
    #main-nav.active {
      display: flex;
      position: absolute;
      overflow: hidden;
      top: 15%;
      right: -2%;
      background: rgb(43, 24, 56);
      height: 45vh;
      width: 120vw;
    }
  }
`;

export default Nav;
