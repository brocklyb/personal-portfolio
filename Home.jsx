import './Styles/ProjectHome.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

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

    return (
      <div id='main-project-container'>
        <div id='intro-container'>
          <h1 className='intro-text'>Hello, I'm <i>Brock.</i></h1>
          <h1 className='intro-text'>I am a <i>web developer.</i></h1>
          <button id='viewMyWork' onClick={handleScrollToProjects}>View my work</button>
        </div>
  
        <div id='navbar-container'>
          <ul id='navbar-links'>
            <li onClick={handleScrollToTop} id='navbar-home'>Home</li>
            <li onClick={handleScrollToAbout} id='navbar-about'>About</li>
            <li onClick={handleScrollToProjects} id='navbar-projects'>Projects</li>
            <li onClick={handleScrollToBottom} id='navbar-contact'>Contact</li>
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
              <div id='about-right'><p>Right content</p></div>
            </div>
          </div>
        </div>
  
        <div id='projects-container'>
            <h1>Projects</h1>
          <div id='project-one'>
            <h3>Project 1</h3>
            <ul>
                <li><Link to="/snake/home">Snake Game</Link></li>
            </ul>
          </div>
  
          <div id='project-two'>
            <h3>Project 2</h3>
            <ul>
                <li><Link to="/nonprofit/home">Non Profit</Link></li>
            </ul>
          </div>
  
          <div id='project-three'>
            <h3>Project 3</h3>
          </div>
  
          <div id='project-four'>
            <h3>Project 4</h3>
          </div>
        </div>
  
        <div id='contact-container'>
          <h1>Contact</h1>
          <p>Have a question or want to work together?<br></br>
              Leave your details and I'll get back to you as soon as possible.</p>
          <input id='contact-name' placeholder='Name'></input>
          <br></br>
          <input id='contact-email' placeholder='Email'></input>
          <br></br>
          <input id='contact-message' placeholder='Message'></input>
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

