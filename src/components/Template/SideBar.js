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
      </header>
      <b>
        <a href="https://ist.ac.at/en/research/bugnet-group/">Assistant Professor</a> at <a href="https://ist.ac.at/en/home/">Institute of Science and Technology Austria (ISTA)</a>
      </b>
      <br /><br />
      <p style={{ text: 'lowercase', fontSize: '20px', color: '#629DFC' }} align="center">
        Leader of the Asterics -- Asteroseismology & Stellar Dynamics group at ISTA. Group website: <a href="https://www.asterics.at/">ASTERICS</a>
      </p>
      <b style={{ text: 'lowercase', fontSize: '20px', color: '#629DFC' }} align="center">
        Contact: <a href="mailto:lisa.bugnet@ist.ac.at">lisa.bugnet@ist.ac.at</a>
      </b>
    </section>

    <section className="blurb">
      <h2>About Me</h2>
      <p>I am an Astrophysicist, specialized in Stellar physics.
        I use Asteroseismology to unveil the dynamical processes taking
        place inside the core of stars like the Sun.
        I am currently an Assistant Professor and leader of the 
        Asterics -- Asteroseismology & Stellar Dynamics group
        at <a href="https://ist.ac.at/en/home/">Institute of Science and Technology Austria (ISTA)</a>
      </p>
      <p> I obtained my PhD in Astrophysics in 2020 from <a href="https://u-paris.fr/en/">University of Paris</a>
      and <a href="https://www.cea.fr/english">CEA</a>,
        and my Astrophysics and Earth Sciences Master degrees in 2017 from
        <a href="https://www.ens.psl.eu/en">Ecole Normale Supérieure of Paris</a> and
        <a href="https://www.observatoiredeparis.psl.eu/-observatoire-de-paris-.html?lang=en">Paris Observatory</a>.
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
