import './Projects.css';
import cedocLogo from './images.png';
import backgroundGeneratorLogo from './logo.png';

function Projects(){
    return(
      <div className="projects">
          <div className="project">
              <h3 className="project-title">Cedoc</h3>
              <img alt="project" src={cedocLogo} className="project-logo"/>
              <p>It's a web application for managing doctoral students and their supervisors
              at Mohammadia School of engineering.</p>
              <p>Used technologies : React.js, Express.js, MySql, Axios</p>
                <a href="https://cedoc.vercel.app/" target="_blank">
                    <button  className="project-button">Visit</button>
                </a>
          </div>
          <div className="project">
              <h3 className="project-title">Background Generator</h3>
              <img alt="project" src={backgroundGeneratorLogo} className="project-logo"/>
              <p>Simple web app that allows you to choose 2 colors for your background
                  and display a smooth transition between them.
                  There is also a button to generate random colors. </p>
              <p>Used technologies : HTML, CSS, JavaScript</p>
              <a href="https://houssamezzin.github.io/Background-Generator/" target="_blank">
                  <button  className="project-button">Visit</button>
              </a>
          </div>
          <div className="project">
              <h3 className="project-title">Cedoc</h3>
              <img alt="project" src={cedocLogo} className="project-logo"/>
              <p>It's a web application for managing doctoral students and their supervisors
                  at Mohammadia School of engineering.</p>
              <p>Used technologies : React.js, Express.js, MySql, Axios</p>
              <a href="https://cedoc-hichamoujari.vercel.app/" target="_blank">
                  <button  className="project-button">Visit</button>
              </a>
          </div>
          <div className="project">
              <h3 className="project-title">Cedoc</h3>
              <img alt="project" src={cedocLogo} className="project-logo"/>
              <p>It's a web application for managing doctoral students and their supervisors
                  at Mohammadia School of engineering.</p>
              <p>Used technologies : React.js, Express.js, MySql, Axios</p>
              <a href="https://cedoc-hichamoujari.vercel.app/" target="_blank">
                  <button  className="project-button">Visit</button>
              </a>
          </div>

      </div>
    );
}

export default Projects;