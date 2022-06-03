import myLogo from './logo338.png';
import React from 'react';

function About() {
  return (
    <div className="aboutText">
        <div className='aboutLogo'>
          <img src={myLogo}  alt='iBurns logo'/>
        </div>
        <p>Our web application, iBurns, takes in a plethora of information to generate a unique video documenting you. After a user answers a few simple biographical questions, our product analyzes their answers and produces a high quality Ken Burns-style video with narration and imagery.</p>
        <p>Why did we make this? People feel less and less special about themselves, hiding their identities from the internet and others. Documentaries are generally about significant events or famous people. Everyday people can’t make a documentary about themselves because they don't have the time, money, or resources. And we believe that people deserve their recognition, but they don’t receive it nearly often enough.</p>
        <p>So, through iBurns, we provide laymen with the opportunity to gain exactly this. By producing a unique, Ken-Burns style documentary for each and every one of our users we are able to prove one simple fact: everyone is special and deserves to feel as such. Roll the dice with us, make a video, and blow up on Instagram!</p>
        <p>“Our team of dedicated engineers has built a timeless product. Now, every person who has ever wanted to feel famous can live their dream – through iBurns.” - Senior Software Engineer, iBurns.</p>
        <p>All it takes for a user to get started is filling out their information on the web application. From there, the backend and AI take over to produce the final product. See what our users have said:</p>
        <p>“I just filled out a form on iBurns and shared my video on facebook. It went viral and everybody thought I was famous!” - Jane Doe, beta testing user.</p>
        <p>Ken Burns himself does not have the time to create a biopic for every person, so it is our goal, at iBurns, to make each person feel notable and remarkable with a personalized documentary.</p>
        <p>Our space: Pancoe-NSUHS Life Sciences Auditorium</p>
    </div>
  );
}

export default About;