import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Publications/Cell';
// import First from '../components/Publications/';
import First from '../components/Publications/Firstarticle';
import Major from '../components/Publications/Majorarticle';
import Minor from '../components/Publications/Minorarticle';

// import Cell from '../components/Publications/First/Cell';
// import data from '../data/publications';

import articles from '../data/publications/first';
import articlesM from '../data/publications/major';
import articlesm from '../data/publications/minor';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

// import data from '../data/publications';

// const sections = [
//   'First author articles',
//   'Major contributions',
//   'Minor contributions',
// ];

const Publications = () => (
  <Main
    title="Publications"
    description="Learn about Lisa Bugnet's publications."
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="publications">Publications</Link></h2>
          <p>  </p>
          <a href={`${PUBLIC_URL}/Publications_Lisa_Bugnet-2022.pdf`} className="download" download="Publications_Lisa_Bugnet">DOWNLOAD FULL LIST OF PUBLICATIONS</a>
          <p>  </p>
          {/* <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div> */}

        </div>
      </header>
      {/* <p>First author articles</p> */}
      {/* {data.map((first) => (
        <First
          data={first}
          key={first.title}
        />
      ))} */}
      {/* <Major data={major} /> */}
      {/* <Skills skills={skills} categories={categories} /> */}
      {/* <Courses data={courses} /> */}
      {/* <Minor data={minor} /> */}
      <First data={articles} />
      <Major data={articlesM} />
      <Minor data={articlesm} />
      {/*  {data.map((first) => (
        <Cell
          data={first}
          key={first.title}
        />
      ))}  */}
    </article>
  </Main>
);

export default Publications;
