import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";


class App extends React.Component{




    render(){
        return (
            <Router>
                <div className="App">
                    <Navigation />
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
