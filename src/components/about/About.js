import React from 'react';
import myPhoto from './me.jpg';
import './About.css';
import {SocialIcon} from "react-social-icons";

function About(){
    return(
        <div className="about-page">
            <div className="my-photo">
                <img className="me" src={myPhoto} alt="me"/>
            </div>
            <div className="about-card">
                <p>Today, due to the fast development in technologies on daily basis,
                    I believe that the world needs more creative people than ever.
                    A key strength is communication; building strong relationships with people in order
                    to deliver the best results.
                </p>
                <p>
                    Curious, enthusiastic and passionate, I am a talented, ambitious and hardworking individual,
                    with broad skills and experience in web development and computer programming.
                    Furthermore problem solving is my passion and
                    I am motivated for new challenges.
                </p>
                <p>
                    Currently I am Software engineering student at Mohammadia school of engineering
                    where I pursue a solid formation in order to lead innovative projects in the future.
                </p>
                <SocialIcon url="https://www.linkedin.com/in/houssam-ezzin-b16757155/" target="_blank"  />
                <SocialIcon url="https://github.com/HoussamEzzin" target="_blank" />
                <SocialIcon url="https://twitter.com/EzzinH"  target="_blank"/>
                <SocialIcon url="https://codepen.io/houssamezzin" bgColor="#000000" target="_blank"/>

            </div>

        </div>
    );
}

export default About;