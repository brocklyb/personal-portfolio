import './Styles/ProjectHome.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Toggle from './Toggle'

import cssDarkIcon from "./images/css-dark.svg"
import cssLightIcon from "./images/css-light.svg"
import gitDarkIcon from "./images/git-dark.svg"
import gitLightIcon from "./images/git-light.svg"
import htmlDarkIcon from "./images/html-dark.svg"
import htmlLightIcon from "./images/html-light.svg"
import jsDarkIcon from "./images/js-dark.svg"
import jsLightIcon from "./images/js-light.svg"
import mongoDarkIcon from "./images/mongo-dark.svg"
import mongoLightIcon from "./images/mongo-light.svg"
import pythonDarkIcon from "./images/python-dark.svg"
import pythonLightIcon from "./images/python-light.svg"
import reactDarkIcon from "./images/react-dark.svg"
import reactLightIcon from "./images/react-light.svg"
import usestate from 'usestate';



function Home() {
  useEffect(() => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("navbar-container");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  } 
  },[])

  const handleScrollToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  const handleScrollToProjects = () =>{
    window.scrollTo({top: 1600, behavior: 'smooth'})
  }

  const handleScrollToAbout = () =>{
    window.scrollTo({top: 700, behavior: 'smooth'})
  }

  const handleScrollToBottom = () =>{
    window.scrollTo({top: 5000, behavior: 'smooth'})
  }

  /*             <img src={cssDarkIcon} alt="" />
              <img src={cssLightIcon} alt="" />
              <img src={gitDarkIcon} alt="" />
              <img src={gitLightIcon} alt="" />
              <img src={htmlDarkIcon} alt="" />
              <img src={htmlLightIcon} alt="" />
              <img src={jsDarkIcon} alt="" />
              <img src={jsLightIcon} alt="" />
              <img src={mongoDarkIcon} alt="" />
              <img src={mongoLightIcon} alt="" />
              <img src={pythonDarkIcon} alt="" />
              <img src={pythonLightIcon} alt="" />
              <img src={reactDarkIcon} alt="" />
              <img src={reactLightIcon} alt="" />
              */
    const [isDark, setIsDark] = useState(false);
  
    return (
      <div id='main-project-container' data-theme={isDark ? "dark" : "light"}>
        <div id='intro-container'>
          <h1 className='intro-text'>Hello, I'm <i>Brock Bozzuto.</i></h1>
          <h1 className='intro-text'>I am a <i>web developer.</i></h1>
        </div>

        <div id='sandbox-container' data-theme={isDark ? "dark" : "light"}>
          <Toggle 
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)}
          />
          <h1 id='text'>This is Text</h1>
          <div id='box'>
            <p>This is a box</p>
          </div>
        </div>
  
        <div id='navbar-container' >
          <ul id='navbar-links' >
            <li className='nav-link' onClick={handleScrollToTop} id='navbar-home'>Home</li>
            <li className='nav-link' onClick={handleScrollToAbout} id='navbar-about'>About</li>
            <li className='nav-link' onClick={handleScrollToProjects} id='navbar-projects'>Projects</li>
            <li className='nav-link' onClick={handleScrollToBottom} id='navbar-contact'>Contact</li>
          </ul>
        </div>
  
        <div id='about-container'>
            <h1>About</h1>
          <div id='about-content-container'>
            <div className='about-column'>
              <div id='about-left'>
                <div id='profile-pic'>PFP</div>
                <p id='profile-bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, qus nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    consectetur adipiscng eli
                    Sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            
            <div className='about-column'>
              <div className='about-right-image-container'>
                <img className='software-logo' src={cssLightIcon} alt="" />
                <img className='software-logo' src={gitLightIcon} alt="" />   
                <img className='software-logo' src={htmlLightIcon} alt="" />       
                <img className='software-logo' src={jsLightIcon} alt="" />
                <img className='software-logo' src={mongoLightIcon} alt="" />      
                <img className='software-logo' src={pythonLightIcon} alt="" />
                <img className='software-logo' src={reactLightIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
  
        <div id='projects-container'>
            <h1>Projects</h1>
          <div id='project-one'>
              <h2><Link to="/snake/home">Snake Game</Link></h2>
          </div>
  
          <div id='project-two'>
            <h3>Project 2</h3>
            <ul>
                <li><Link to="/nonprofit/home">Non Profit</Link></li>
            </ul>
          </div>
  
          <div id='project-three'>
            <h3>Project 3</h3>
            <ul>
                <li>Mobile App</li>
            </ul>
          </div>
  
          <div id='project-four'>
            <h3>Project 4</h3>
            <ul>
                <li>To Do App</li>
            </ul>
          </div>
        </div>
  
        <div id='contact-container'>
          <h1>Contact</h1>
          <p>Have a question or want to work together?<br></br>
              Leave your details and I'll get back to you as soon as possible.</p>
          <input className='contact-me-input' id='contact-name' placeholder='Name'></input>
          <br></br>
          <input className='contact-me-input' id='contact-email' placeholder='Email'></input>
          <br></br>
          <input className='contact-me-input' id='contact-message' placeholder='Message'></input>
          <br></br>
          <button>Submit</button>
        </div>
  
        <div id='footer-container'>
            <button onClick={handleScrollToTop}>Top of page</button>
            <h2>LinkedIn</h2>
            <h2>GitHub</h2>
        </div>
  
      </div>
    );
  }
  
  export default Home;

