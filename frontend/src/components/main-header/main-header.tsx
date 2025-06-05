import { NavLink } from 'react-router-dom';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <h1>Espen Askeladd</h1>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/experiences" 
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Experiences
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
