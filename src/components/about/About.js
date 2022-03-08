import React from 'react';
import myPhoto from './me.jpg';
import './About.css';


function About(){
    return(
        <div className="about-page d-flex flex-column align-items-center">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="my-photo">
                    <img className="me" src={myPhoto} alt="Houssam Ezzin"/>
                </div>
                <div>
                    <p className="simple-desc">
                        Full stack developer || IT engineering student
                        <hr/>
                        Mohammdia School Of Engineers
                    </p>
                </div>
            </div>

            <div className="about-card">
                <div className='about-card-text'>
                    <p >Today, due to the fast development in technologies on daily basis,
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

                </div>
                
                <p className="quote">"I use my keyboard to solve problems and transform needs into functionalities ".</p>


                

            </div>
            <div className="formation">
                <h2>Academic Curriculum</h2>
                <div className="formation-vl">
                    <div className="formation-section">
                        <h4 className="formation-title">State Engineer - Mohammadia School Of Engineers</h4>
                        <p>Information Technology <br/>
                        2019-2022</p>
                    </div>
                    <div className="formation-section">
                        <h4 className="formation-title">CPGE - Moulay Youssef & Salman El Farissi</h4>
                        <p>A lot of maths and physics <br/>
                            2017-2019</p>
                    </div>
                    <div className="formation-section">
                        <h4 className="formation-title">Baccalaureate - High School Abderahim Bouabid</h4>
                        <p> Math <br/>
                            2016-2017</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;