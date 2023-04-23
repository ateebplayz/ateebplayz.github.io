import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeIn from 'react-fade-in';

function AboutPage() {
  library.add(fab);

  return (
    <FadeIn>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' integrity='sha512-vI+AgbPcwGck5ST5b9q5N1NtH5Gnwz1NXnMk2v2McSfS5M5quQLJoUGW9ZoRpSG4z4zz4nViY8wNOQzzFvS7Sg==' crossorigin='anonymous' referrerpolicy='no-referrer' />
      <div className='App-page'>
        <div style={{ margin: '10px' }}>
          <Link to='/'>
            <p className='App-paragraph'>Back</p>
          </Link>
          <h1 className='App-colored-text'>About Me</h1>
        </div>
        <h4 className='App-heading'>I was born and raised in Pakistan. I self-taught myself HTML/CSS at Age 12. Now i Program across many languages.</h4>
        <p className='App-paragraph'>I started my journey with simply HTML/CSS. I made my way through many languages such as Python, Javascript, Arduino and Node. I have experience with Linux and have been using Ubuntu for more than 2 years! Now I’m paving my path towards React.JS.</p>
        <p className='App-paragraph'>After HTML/CSS I headed towards discord API and looked into a library called ‘Discord.js’. Then I made programs in Python before heading to Arduino and making some robots. </p>
        <p className='App-paragraph'>
          I have incredible leadership qualities. I have been the project lead of many projects. In real life as well, I was given Head of Council(The highest achievable position for a student) at my school of 1,000 students. I also led a campaign for Juniors to learn and implement C++ and Arduino.
        </p>
        <p className='App-paragraph'>
          As for programming, You can find my github page by clicking the button below. However most of my main repositories are private. So if you would like to hire/freelance, do hit me up on my discord @ Sunny.#7285
        </p>
        <div style={{ margin: '10px' }}>
          <button className='App-btn' style={{ marginRight: '10px' }}>My Projects</button>
          <button className='github-button' onClick={() => window.open("https://github.com/ateebplayz", "_blank")}><FontAwesomeIcon icon={['fab', 'github']} style={{ marginRight: '5px' }} />My Git</button>
		</div>
      </div>
    </FadeIn>
  );
}

export default AboutPage;
