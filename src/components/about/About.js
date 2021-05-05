import React from 'react';
import myPhoto from './me.jpg';
import './About.css';

function About(){
    return(
        <div className="about-page">
            <div className="my-photo">
                <img className="me" src={myPhoto} alt="me"/>
            </div>
            <div className="about-card">
                <p>I am a Software Engineering Student at Mohammadia School Of Engineering.
                    I 'm very passionate about computer science,
                    I like problem solving and I'm enthusiastic for new challenges.
                </p>
            </div>

        </div>
    );
}

export default About;