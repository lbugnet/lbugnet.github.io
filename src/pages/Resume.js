import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Prizes from '../components/Resume/Prizes';
import Grants from '../components/Resume/Grants';
import Inviteds from '../components/Resume/Invited';
import Contributeds from '../components/Resume/Contributed';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import prizes from '../data/resume/prizes';
import grants from '../data/resume/grants';
import talks from '../data/resume/invited';
import talks2 from '../data/resume/contributed';
// import { skills, categories } from '../data/resume/skills';
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const sections = [
  'Research -',
  'Education -',
  'Research Grants -',
  'Prizes & Awards -',
  'Invited contributions -',
  'Contributed Talks -',
  // 'Skills',
  // 'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="CV"
    description="Lisa Bugnet's Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">CV</Link></h2>
          {/* <a href="./directory/yourfile.pdf" download="newfilename">Download the pdf</a> */}
          /*<a href={`${PUBLIC_URL}/CV_Lisa_Bugnet_2022-2.pdf`} className="download" download="CV_Lisa_Bugnet_2022-2">DOWNLOAD FULL CV </a>
          <p>  </p> */
          <a href={`${PUBLIC_URL}/CV_Lisa_Bugnet_2022-2.pdf`} className="download" download="Publications_Lisa_Bugnet">DOWNLOAD FULL CV AND LIST OF PUBLICATIONS</a>
          <p>  </p>
          /*<a href={`${PUBLIC_URL}/LIST_ORAL_LISA_BUGNET.pdf`} className="download" download="Talks_Lisa_Bugnet">DOWNLOAD FULL LIST OF ORAL CONTRIBUTIONS</a>
          <p>  </p> */
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Experience data={positions} />
      <Education data={degrees} />
      <Grants data={grants} />
      <Prizes data={prizes} />
      <Inviteds data={talks} />
      <Contributeds data={talks2} />
      {/* <Courses data={courses} />  */}
      <References />

      {/* <Skills skills={skills} categories={categories} /> */}
      {/* <Courses data={courses} /> */}

    </article>
  </Main>
);

export default Resume;
