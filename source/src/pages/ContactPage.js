import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css'
function ContactPage() {
  library.add(fab);
  library.add(fas);
  return (
    <FadeIn>
      <div className='App-page'>
        <div className='App-project' style={{padding: '30px'}}>
          <Link to='/'>
            <p className='App-paragraph'>Back</p>
          </Link>
          <h1>Interested?</h1>
          <p>There are multiple ways to contact me!</p>
          <br/>
          <div>
          <button className='discord-button' onClick={() => window.open('https://discord.gg/RnhEz54zjZ')}><FontAwesomeIcon icon={['fab', 'discord']} style={{ marginRight: '5px' }} />Discord</button>
          <button className='github-button' onClick={() => window.open('https://github.com/ateebplayz')}><FontAwesomeIcon icon={['fab', 'github']} style={{ marginRight: '5px' }} />Github</button>
          <button className='call-button' onClick={() => window.open('tel:+923362833222')}><FontAwesomeIcon icon="fa-solid fa-phone-volume" style={{marginRight:'5px'}}/>+92 336 2833222</button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default ContactPage;
