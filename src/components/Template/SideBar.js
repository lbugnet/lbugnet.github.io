import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Lisa Bugnet</h2>
        <p> Flatiron Research Fellow </p>
      </header>
      <b>
        Starting Junuary 2023: Assistant Professor at <a href="https://ist.ac.at/en/home/">Institute of Science and Technology Austria (ISTA)</a>
      </b>
      <br /><br />
      <p style={{ text: 'lowercase', fontSize: '20px', color: '#1E90FF' }}>
        Applications are currently open for PhD and Postdoctoral positions in my group at ISTA
      </p>
      <b style={{ text: 'lowercase', fontSize: '20px', color: '#1E90FF' }}>
        Contact: <a href="mailto:lbugnet@flatironinstitute.org">lbugnet@flatironinstitute.org</a>
      </b>
    </section>

    <section className="blurb">
      <p> </p>
      <h2>About</h2>
      <p>I am an Astrophysicist, specialized in Stellar physics.
        I use Asteroseismology to unveil the dynamical processes taking place
        inside the core of stars like the Sun.
        I am currently a <a href="https://www.simonsfoundation.org/flatiron/">Flatiron Research Fellow </a> at the Center for Computational Astrophysics of the Flatiron Insititute in New York, and will soon join ISTA as an Assistant Professor.
      </p>
      <p> I obtained my PhD in Astrophysics in 2020 from <a href="https://u-paris.fr/en/">University of Paris</a> and <a href="https://www.cea.fr/english">CEA</a>,
        and my Astrophysics and Earth Sciences Master degrees in 2017 from the <a href="https://www.ens.psl.eu/en">Ecole Normale Supérieure of Paris</a> and the <a href="https://www.observatoiredeparis.psl.eu/-observatoire-de-paris-.html?lang=en">Paris Observatory</a>.
        {/* the co-founder and CTO of <a href="https://arthena.com">Arthena</a>. Before Arthena I was
        at <a href="https://matroid.com">Matroid</a>
        , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a */}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Lisa Bugnet <Link to="/">lbugnet.github.io/personal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
