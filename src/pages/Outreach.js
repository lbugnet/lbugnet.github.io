import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Video from '../components/Outreach/videos';
import Twitter from '../components/Outreach/twitter';
import Twitter3 from '../components/Outreach/twitter3';
// import data from '../data/outreach';
import videos from '../data/outreach/videos';
import twitter from '../data/outreach/twitter';
import twitter3 from '../data/outreach/twitter3';

const Outreach = () => (
  <Main
    title="outreach"
    description="Learn about Lisa Bugnet's outreach."
  >
    <article className="post" id="outreach">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/outreach">outreach</Link></h2>
          <p>Recorded outreach events (in French)</p>
        </div>
      </header>
      <Video data={videos} />
      <Twitter data={twitter} />
      <Twitter3 data={twitter3} />
      {/* {videos.map((outreach) => (
        <Cell
          data={outreach}
          key={outreach.title}
        />
      ))} */}
    </article>
  </Main>
);

export default Outreach;
