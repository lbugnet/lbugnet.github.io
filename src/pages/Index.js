import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Lisa Bugnet's personal website."}
  >
    <p>  </p>
    <p>
      <citation>All the stars are silent. You - only you -
        will have stars that can laugh !
      </citation>
    </p>
    <p align="right"> <citation2> Antoine de Saint-Exupéry </citation2></p>
    <img src="../public/images/pp.png" alt="description of pp" />
    {/*     <img src={`${process.env.PUBLIC_URL}${'src/pages/lpp.png'}`} alt="description of pp" />
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About me</Link></h2>
          <p>
            Astrophysicist -- Stellar physicist
          </p>
        </div>
      </header>
      Welcome to my website.
      Please feel free to read more about my <Link to="/projects">research interests</Link>,
      or you can check out my {' '}
      <Link to="/resume">CV</Link>, {' '}
      <Link to="/publications">publications</Link>, {' '}
      view <Link to="/outreach">outreach</Link>, {' '}
      or <Link to="/contact">contact</Link> me.
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
    <p>
      <citation>There is sweetness in the laughter of all the stars.</citation>
      <citation> And no grown-up will ever understand that this is a
        matter of so much importance.
      </citation>
    </p> */}
  </Main>
);

export default Index;
