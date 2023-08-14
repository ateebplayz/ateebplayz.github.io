import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import me from '../assets/me.jpeg';

function HomePage() {
  return (
    <div className='App-page'>
      <FadeIn>
          <img src={me} className='App-img' alt='Me' style={{marginTop: '50px'}} />
          <p>Hi, I am Sunny.</p>
          <Link to='/about' >
            <button className='App-btn'>Learn More</button>
          </Link>
      </FadeIn>

    </div>
  );
}

export default HomePage;
