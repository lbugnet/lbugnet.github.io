import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell2 = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <h3><a href={data.link}>{data.subtitle}</a></h3>
        <time className="published">{dayjs(data.date).format('YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      {/* <a href={data.link} className="twitter">  */}
      <blockquote className="twitter-tweet" data-theme="dark">
        <p lang="fr" dir="ltr">Dans le podcast Talents Scientifiques du jour, découvrez le parcours de
          <a href="https://twitter.com/lisa_Bugnet?ref_src=twsrc%5Etfw">
            @lisa_Bugnet
          </a>
          qui étudie la dynamique interne des étoiles pour comprendre
          leur origine et leur évolution :
          <br />Acast :
          <a href="https://t.co/0u54ifakac">
            https://t.co/0u54ifakac
          </a>
          <br /> Apple Podcast :
          <a href="https://t.co/iOh3kwBbn3">https://t.co/iOh3kwBbn3</a>
          <a href="https://t.co/7XmlLpxxgw">pic.twitter.com/7XmlLpxxgw</a>
          <br />Serious Audio (@AudioSerious) <a href="https://twitter.com/AudioSerious/status/1257913133848502272?ref_src=twsrc%5Etfw">May 6, 2020</a>
        </p>
      </blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />

      {/* </a> */}
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);
Cell2.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    video: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell2;
