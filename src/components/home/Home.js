import "./Home.css";
import TextAnimation from "react-animate-text";

function Home(){
    return(
      <div className="home">
          <TextAnimation charInterval={50}>
              <h1 className="name">I am Ezzin Houssam</h1>
              <h2 className="job">Full Stack Developer</h2>
          </TextAnimation>

      </div>
    );
}

export default Home;