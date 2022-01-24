import './Projects.css';
import shopo from './shopo.png';
import bexfor from './bexfor.png';
import backgroundGeneratorLogo from './logo.png';
import snakeLogo from './header.jpg';
import chatbotlogo from './chatbot.png';

function Projects() {
    return (
        <div className="projects">
            <div className="project">
                <h3 className="project-title">Sentiment Analysis</h3>
                
                <p>
                    Web application that takes a youtube video URL and analyze its comments,
                    and decide if it's positive, negative or neutral.
                    Implemented using two different approaches : Rule-Based and machine learning.
                    It supports English And Arabic </p>
                <p className="used-tech">Used technologies : Spring boot , Natural Language Processing, React, Youtube API</p>
                <a rel="noreferrer" href="https://github.com/HoussamEzzin/Sentiment_Analysis_webapp" target="_blank">
                    <button className="project-button">Visit</button>
                </a>
            </div>
            <div className="project">
                <h3 className="project-title">Sakuuragi - ChatBot</h3>
                <img alt="project" src={chatbotlogo} className="project-logo"/>
                <p> Web application which provie a Chatbot trained with a lot of data in order to interact with your input.
                    It's still under developpement and Sakuuragi is getting clever ! </p>
                <p className="used-tech">Used technologies : Django, HTML, CSS, JQuery</p>
                <a rel="noreferrer" href="https://github.com/HoussamEzzin/Sentiment-Analysis" target="_blank">
                    <button className="project-button">Visit</button>
                </a>
            </div>
            <div className="project">
                <h3 className="project-title">Shopo</h3>
                <img alt="project" src={shopo} className="project-logo"/>
                <p>It's an E-Commerce mobile Application.</p>
                <p className="used-tech">Used technologies : Flutter, Firebase</p>
                <a rel="noreferrer" href="https://github.com/HoussamEzzin/shopo" target="_blank">
                    <button className="project-button">Visit</button>
                </a>
            </div>
            <div className="project">
                <h3 className="project-title">Bexfor</h3>
                <img alt="project" src={bexfor} className="project-logo"/>
                <p>Bexfor is an international consultancy and training institute, who have a solid team with
                    proven skills, and a collaborative network on several continents.
                    In my second year internship I contributed to the development of their website.
                </p>
                <p className="used-tech">Used technologies : Laravel, MySql, Dandreo API</p>
                <a rel="noreferrer" href="https://github.com/HoussamEzzin/shopo" target="_blank">
                    <button className="project-button">Visit</button>
                </a>
            </div>
            <div className="project">
                <h3 className="project-title">Background Generator</h3>
                <img alt="project" src={backgroundGeneratorLogo} className="project-logo"/>
                <p>Simple web app that allows you to choose 2 colors for your background
                    and display a smooth transition between them.
                    There is also a button to generate random colors. </p>
                <p className="used-tech">Used technologies : HTML, CSS, JavaScript</p>
                <a rel="noreferrer" href="https://houssamezzin.github.io/Background-Generator/" target="_blank">
                    <button className="project-button">Visit</button>
                </a>
            </div>
            <div className="project">
                <h3 className="project-title">Classic Snake Game</h3>
                <img alt="project" src={snakeLogo} className="project-logo"/>
                <p>The player controls a dot, square, or object on a bordered plane.
                    As it moves forward, it leaves a trail behind, resembling a moving snake.
                    The player loses when the snake runs into itself. </p>
                <p className="used-tech">Used technologies : HTML, CSS, JavaScript</p>
                <a rel="noreferrer" href="https://houssamezzin.github.io/Snake-Game/" target="_blank">
                    <button className="project-button">Visit</button>
                </a>
            </div>
            <div className="project">
                <h3 className="project-title">News App</h3>
                {/*<img alt="project" src={snakeLogo} className="project-logo"/>*/}
                <p>Mobile application </p>
                <p className="used-tech">Used technologies : Java, Android, News API</p>
                <a rel="noreferrer" href="https://github.com/HoussamEzzin/NewsApp" target="_blank">
                    <button className="project-button">Visit</button>
                </a>
            </div>
        </div>
    );
}

export default Projects;