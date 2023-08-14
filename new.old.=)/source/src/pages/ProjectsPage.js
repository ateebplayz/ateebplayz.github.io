import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeIn from 'react-fade-in';
import me from '../assets/me.jpeg'
import disminer from '../assets/Projects/disminer.png'
import he from '../assets/Projects/he.jfif'
import bc from '../assets/Projects/bc.jfif'
import lgs from '../assets/Projects/lgs.jfif'
import ze from '../assets/Projects/ze.jfif'
import ContactPage from './ContactPage'
import Popup from 'reactjs-popup';

function ProjectsPage() {
  library.add(fab);
  return (
    <FadeIn>
      <div className='App-page'>
        <div style={{ margin: '10px' }}>
          <Link to='/'>
            <p className='App-paragraph'>Back</p>
          </Link>
          <h1 className='App-colored-text'>My Projects</h1>
          <p>I've done many projects. These are just my main 6 ones. Look at my GitHub page <a href="https://github.com/ateebplayz">here</a></p>
        </div>
        <div className="App-projects">
          <div className='App-project'>
            <img src={disminer} className='App-project-img'></img>
            <h2 className='App-heading' style={{marginTop: '10px'}}>DisMiner</h2>
            <div>
              <button className='App-project-attr'>Discord.JS</button>
              <button className='App-project-attr'>MongoDB</button>
              <button className='App-project-attr'>Discord API</button>
              <button className='App-project-attr'>Git</button>
            </div>
            <p style={{marginRight: '10px', marginLeft: '10px'}}>DisMiner was a Discord-Mongoose economy bot written in <a href="https://discord.js.org">Discord.JS</a></p>
            <div>
              <button  className='dc_btn' onClick={() => window.open("https://discord.gg/qMqqFR4P9J")}><FontAwesomeIcon icon={['fab', 'discord']} style={{ marginRight: '5px' }} />Discord</button>
            </div>
          </div>
          <div className='App-project'>
            <img src={he} className='App-project-img'></img>
            <h2 className='App-heading' style={{marginTop: '10px'}}>Hidden Earth</h2>
            <div>
              <button className='App-project-attr'>Spigot</button>
              <button className='App-project-attr'>Java</button>
              <button className='App-project-attr'>Skript</button>
              <button className='App-project-attr'>Wordpress</button>
              <button className='App-project-attr'>Minecraft</button>
              <button className='App-project-attr'>Luckperms</button>
              <button className='App-project-attr'>Essentials</button>
            </div>
            <p style={{marginRight: '10px', marginLeft: '10px'}}>Hidden Earth is a MC Earth Server with many planets.</p>
            <div>
              <button  className='dc_btn' onClick={() => window.open("https://discord.gg/hiddenearth")}><FontAwesomeIcon icon={['fab', 'discord']} style={{ marginRight: '5px' }} />Discord</button>
            </div>
          </div>
          <div className='App-project'>
            <img src="https://images-ext-1.discordapp.net/external/KhvyYOGi3qwTY10q9NQAJMEPDyweRe3_2G3x2VnkEM4/%3Fsize%3D4096/https/cdn.discordapp.com/icons/803002663147012159/b5994fb7e704927c405430f4e824b028.png?width=230&height=230" className='App-project-img'></img>
            <h2 className='App-heading' style={{marginTop: '10px'}}>PWA Developer</h2>
            <div>
              <button className='App-project-attr'>React</button>
              <button className='App-project-attr'>Discord.JS</button>
              <button className='App-project-attr'>Discord API</button>
              <button className='App-project-attr'>MongoDB</button>
              <button className='App-project-attr'>Debian</button>
              <button className='App-project-attr'>Linux</button>
              <button className='App-project-attr'>Git</button>
            </div>
            <p style={{marginRight: '10px', marginLeft: '10px'}}>PWA is a discord server with over 9,000 members.</p>
            <div>
              <button  className='dc_btn' onClick={() => window.open("https://discord.gg/pwa")}><FontAwesomeIcon icon={['fab', 'discord']} style={{ marginRight: '5px' }} />Discord</button>
            </div>
          </div>
          <div className='App-project'>
            <img src={bc} className='App-project-img'></img>
            <h2 className='App-heading' style={{marginTop: '10px'}}>BC</h2>
            <div>
              <button className='App-project-attr'>Python</button>
              <button className='App-project-attr'>Binary & Hex</button>
              <button className='App-project-attr'>Pip</button>
              <button className='App-project-attr'>Library</button>
              <button className='App-project-attr'>Git</button>
            </div>
            <p style={{marginRight: '10px', marginLeft: '10px'}}>BC was a Python Library for converting binary into other forms</p>
            <div>
              <button className='gh_btn' onClick={() => window.open("https://github.com/ateebplayz/binaryconverter", "_blank")}><FontAwesomeIcon icon={['fab', 'github']} style={{ marginRight: '5px' }} />Github</button>
		        </div>
          </div>
          <div className='App-project'>
            <img src={lgs} className='App-project-img'></img>
            <h2 className='App-heading' style={{marginTop: '10px'}}>LGS App</h2>
            <div>
              <button className='App-project-attr'>Java</button>
              <button className='App-project-attr'>Android SDK</button>
              <button className='App-project-attr'>React Native</button>
              <button className='App-project-attr'>Git</button>
            </div>
            <p style={{marginRight: '10px', marginLeft: '10px'}}>LGS App is a WIP app for my School that I am making.</p>
            <div>
              <button  className='dc_btn' onClick={() => window.open("https://discord.gg/qJWXpdB6Tb")}><FontAwesomeIcon icon={['fab', 'discord']} style={{ marginRight: '5px' }} />Discord</button>
            </div>
          </div>
          <div className='App-project'>
            <img src={ze} className='App-project-img'></img>
            <h2 className='App-heading' style={{marginTop: '10px'}}>Zero Earth</h2>
            <div>
              <button className='App-project-attr'>Spigot</button>
              <button className='App-project-attr'>Java</button>
              <button className='App-project-attr'>Skript</button>
              <button className='App-project-attr'>Wordpress</button>
              <button className='App-project-attr'>Minecraft</button>
              <button className='App-project-attr'>Luckperms</button>
              <button className='App-project-attr'>Essentials</button>
            </div>
            <p style={{marginRight: '10px', marginLeft: '10px'}}>Zero Earth was a MC Earth Server with a 1:1000 scale of Earth.</p>
            <div>
              <button  className='dc_btn' onClick={() => window.open("https://discord.gg/hiddenearth")}><FontAwesomeIcon icon={['fab', 'discord']} style={{ marginRight: '5px' }} />Discord</button>
            </div>
          </div>
          <div className='App-project'>
            <img src={me} className='App-project-img'></img>
            <h2 className='App-heading' style={{marginTop: '10px'}}>Portfolio</h2>
            <div>
              <button className='App-project-attr'>HTML</button>
              <button className='App-project-attr'>CSS</button>
              <button className='App-project-attr'>Javascript</button>
              <button className='App-project-attr'>React</button>
              <button className='App-project-attr'>Node</button>
              <button className='App-project-attr'>NPM</button>
              <button className='App-project-attr'>Git</button>
            </div>
            <p style={{marginRight: '10px', marginLeft: '10px'}}>This portfolio is a great example of my work in developing.</p>
            <div>
              <button className='gh_btn' onClick={() => window.open("https://github.com/ateebplayz/ateebplayz.github.io", "_blank")}><FontAwesomeIcon icon={['fab', 'github']} style={{ marginRight: '5px' }} />Github</button>
		        </div>
          </div>
        </div>
        <Link to="/contact">
          <button className='App-btn' style={{marginBottom: '50px'}}>Get in Touch</button>
        </Link>
      </div>
    </FadeIn>
  );
}

export default ProjectsPage;
