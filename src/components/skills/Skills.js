import './Skills.css';
import React from 'react';


class  Skills extends  React.Component{
    render(){
        return(
            <div>
                <div className="skills-circle">
                    <div className="skill" style={{borderTopLeftRadius: '100%'}}>
                        Dev Web/Mobile
                    </div>
                    <div className="skill" style={{borderTopRightRadius: '100%'}}>
                        CyberSecurity
                    </div>
                    <div className="skill" style={{borderBottomLeftRadius: '100%'}} >
                        Machine Learning
                    </div>
                    <div className="skill" style={{borderBottomRightRadius: '100%'}}>
                        Others
                    </div>
                </div>
            </div>
        )
    }

}

export default Skills;