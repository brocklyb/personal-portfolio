import './Styles/ProjectHome.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div id='main-project-container'>
        <div id='intro-container'>
          <h1>Hello, I'm <i>Brock.</i></h1>
          <h1>I am a <i>web developer.</i></h1>
          <button>View my work</button>
        </div>
  
        <div id='navbar-container'>
          <ul id='navbar-links'>
            <li id='navbar-home'>Home</li>
            <li id='navbar-about'>About</li>
            <li id='navbar-projects'>Projects</li>
            <li id='navbar-contact'>Contact</li>
          </ul>
        </div>
  
        <div id='about-container'>
            <h1>About</h1>
          <div id='about-content-container'>
            <div className='about-column'>
              <div id='about-left'><p>LEFT content</p></div>
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
            <button>Top of page</button>
            <h2>LinkedIn</h2>
            <h2>GitHub</h2>
        </div>
  
      </div>
    );
  }
  
  export default Home;
