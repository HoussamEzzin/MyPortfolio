import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Resume  from './components/resume/Resume';
import Skills from './components/skills/Skills';
import Footer from "./components/footer/Footer";


class App extends React.Component{

    render(){
        return (
            <Router>
                <div className="app" >
                    <Navigation />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/skills" component={Skills} />
                    </Switch>
                    <Footer/>
                </div>
            </Router>

        );

    }

}

export default App;
