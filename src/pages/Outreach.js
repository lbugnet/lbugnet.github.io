import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Outreach/Cell';
import data from '../data/outreach';

const Outreach = () => (
  <Main
    title="outreach"
    description="Learn about Lisa Bugnet's outreach."
  >
    <article className="post" id="outreach">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/outreach">outreach</Link></h2>
          <p>Most recent journal articles</p>
        </div>
      </header>
      {data.map((outreach) => (
        <Cell
          data={outreach}
          key={outreach.title}
        />
      ))}
    </article>
  </Main>
);

export default Outreach;
