import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div id="about">
      <div>
        <h1>About</h1>
      </div>
      <br/>
      <br/>
      <div id="thanks">
      <h2>Special Thanks</h2>  
        <ul>
          <li>Prime Academy</li>
          <li>The Ramirez Cohort</li>
          <li>Edan Schwartz</li>
          <li>My family and friends</li>
        </ul>  
      </div> 
      <br/>
      <br/>
      <div id="software">
        <h2>Technologies</h2>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Redux Sagas</li>
          <li>Postico</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <div id="self">
        <img src='https://media-exp1.licdn.com/dms/image/C5603AQGG4ZgSFrzs5Q/profile-displayphoto-shrink_400_400/0/1657761768959?e=1675296000&v=beta&t=D34p8MmjEnvkYWdcr_aU39Jazj5L6hwFwHkHzbT9Mmg'></img>
      </div>
      <div id="contact">
        <h2>Feel free to contact me at goejrider@gmail.com</h2>
        <h3>If you are looking for a technical consultant contact me at twinboltconsulting@gmail.com</h3>
      </div>
    </div>
  );
}

export default AboutPage;
