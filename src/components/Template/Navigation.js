import React from 'react';
import { Link } from 'react-router-dom';

// import Hamburger from './Hamburger';
import routes from '../../data/routes';
import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    {/* <Hamburger /> */}
    <ContactIcons />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {/* <img align="center" width="100" height="30"
    src={`${PUBLIC_URL}/images/ISTA_Logo_4c_rgb.svg-3.png`} alt="" /> */}

  </header>
);

export default Navigation;
