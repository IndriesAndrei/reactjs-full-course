import { Link } from 'react-router-dom';

// we import the classes object (all css) from the module.css abd this way only to this component we apply those styles
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/">All Meetups</Link></li>
                    <li><Link to="/new-meetup">New Meetup</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;