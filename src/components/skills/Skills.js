import './Skills.css';
import React from 'react';
import {  Popup } from 'semantic-ui-react'

class  Skills extends  React.Component{
    render(){
        return(
            <div>
                <div className="skills-circle">
                    <Popup className="dev-pop-up" content={<ul className="skills-list-pop">
                        <li>Spring Boot</li>
                        <li>Django</li>
                        <li>Laravel</li>
                        <li>React</li>
                        <li>Flutter</li>
                    </ul>} trigger={<div className="skill" style={{borderTopLeftRadius: '100%'}}>

                        <p>Dev Web/Mobile</p>
                    </div>} />
                    <Popup className="dev-pop-up" content={<ul className="skills-list-pop">
                        <li>Python Scripting</li>
                        <li>Wireshark</li>
                        <li>Kali tools</li>
                        <li>Burp Suite</li>
                        <li>Networking</li>
                    </ul>} trigger={<div className="skill" style={{borderTopRightRadius: '100%'}}>

                        <p>CyberSecurity</p>
                    </div>} />
                    <Popup className="dev-pop-up" content={<ul className="skills-list-pop">
                        <li>Numpy</li>
                        <li>Panda</li>
                        <li>Spark</li>
                        <li>Scikit-Learn</li>
                        <li>Tensorflow</li>
                    </ul>} trigger={<div className="skill" style={{borderBottomLeftRadius: '100%'}}>

                        <p>Machine Learning <br/> && <br/> DataScience</p>
                    </div>} />
                    <Popup className="dev-pop-up" content={<ul className="skills-list-pop">
                        <li>Distributed Systems</li>
                        <li>Web Scraping</li>
                        <li>E-commerce</li>
                        <li>Project Management</li>

                    </ul>} trigger={<div className="skill" style={{borderBottomRightRadius: '100%'}}>

                        <p>Others</p>
                    </div>} />

                </div>
            </div>
        )
    }

}

export default Skills;