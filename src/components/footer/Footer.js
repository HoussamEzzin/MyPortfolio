import './Footer.css';
import {SocialIcon} from "react-social-icons";
import React from "react";


function Footer(){
    return(
        <div className="my-footer">
            <div className="social-media">
                <SocialIcon url="https://www.linkedin.com/in/houssam-ezzin-b16757155/" target="_blank"  />
                <SocialIcon url="https://github.com/HoussamEzzin" target="_blank" />
                <SocialIcon url="https://twitter.com/EzzinH"  target="_blank"/>
                <SocialIcon url="https://codepen.io/houssamezzin" bgColor="#000000" target="_blank"/>
            </div>
        </div>
    )
}

export default Footer;