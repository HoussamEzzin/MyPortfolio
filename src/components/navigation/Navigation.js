import './Navigation.css'
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul className="nav-links">
                <Link className="nav-elem" to="/">
                    <li>Home</li>
                </Link>

                <Link className="nav-elem" to="/about">
                    <li>About</li>
                </Link>
                <Link className="nav-elem" to="/projects">
                    <li>Projects</li>
                </Link>
                <Link className="nav-elem" to="/resume">
                    <li>Resume</li>
                </Link>
                <Link className="nav-elem" to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;