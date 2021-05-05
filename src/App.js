import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Particles from "react-tsparticles";

class App extends React.Component{
    constructor() {
        super();
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main) {
        console.log("main :" ,main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    particlesLoaded(container) {
        console.log("container :", container);
    }
    render(){
        return (
            <Router>
                <div className="App">
                    <Navigation />
                    <Particles
                        className='particles'

                        init={this.particlesInit}
                        loaded={this.particlesLoaded}

                        options={{
                            background: {
                                color: {
                                    value: "gray",
                                },
                            },
                            fpsLimit: 60,
                            interactivity: {
                                detectsOn: "window",
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    bubble: {
                                        distance: 400,
                                        duration: 2,
                                        opacity: 0.8,
                                        size: 40,
                                    },
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 1,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 1,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        value_area: 800,
                                    },
                                    value: 150,
                                },
                                opacity: {
                                    value: 0.9,
                                },
                                shape: {
                                    type: "triangle",
                                },
                                size: {
                                    random: true,
                                    value: 5,
                                },
                            },
                            detectRetina: true,
                        }}/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                    </Switch>
                </div>
            </Router>

        );

    }

}

export default App;
