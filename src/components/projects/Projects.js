
import './Projects.css';
import cedocLogo from './images.png';

function Projects(){
    return(
      <div className="projects">
          <div className="project">
              <p>Website for management of doctoral students at EMI</p>
              <img alt="project" src={cedocLogo} className="project-logo"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.</p>
               <button>Visit</button>
          </div>
          <div className="project">
              <img alt="project" src={cedocLogo} className="project-logo"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.</p>
              <button>Visit</button>
          </div>
          <div className="project">
              <img alt="project" src={cedocLogo} className="project-logo"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.</p>
              <button>Visit</button>
          </div>
      </div>
    );
}

export default Projects;