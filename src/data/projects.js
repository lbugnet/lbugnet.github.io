// TODO Add a couple lines about each project
const data = [
  {
    title: 'In search for magnetic fields inside solar-like stars all along their evolution',
    // subtitle: '2015 BVP Hackathon',
    image: '/images/projects/562949f5ca442.png',
    date: '',
    desc:
      'Artist view of the magnetic field that might be present inside the core of evolved solar-like stars according to the fossil field scenario.'
      + ' Credits: CalTech ',
    content: 'Ever since the very recent asteroseismic measures of stellar internal rotation rates, we face an order-of-magnitude problem in understanding the angular momentum transport from the core to the surface of evolved low-mass stars'
      + ' and at least one transport process is not identified in stellar interiors. The understanding of transport mechanisms that allow stellar interiors'
      + ' to keep moderate rotation rates is one of the key questions in modern stellar physics.'
      + ' One candidate to explain both the momentum transport and observed amplitudes of oscillations on the red giant branch is internal magnetism,'
      + ' due to its ability to transport angular momentum and to affect gravity waves in the radiative interior. '
      + 'The characterization of internal magnetism in solar-type stars is therefore of paramount importance, since the understanding of the transport is'
      + ' key in the stellar evolution models that are used for the estimation of the age of stars – and therefore that of planetary systems and stellar populations (galactic archaeology).',
    points: [
      'Theoretical asteroseismology to provide prescription for the search of magnetic fields inside stars',
      'Stellar modelling with MESA & GYRE',
      'Precise asteroseismic analysis of the photometric data from the space telescopes Kepler and TESS ',

    ],
  },
  {
    title: 'Towards a global precise characterisation of observed stars',
    // subtitle: '2015 BVP Hackathon',
    image: '/images/projects/psd.png',
    date: '',
    desc:
      'Power spectrum density (PSD) of stars like the Sun along its evolution obtained during the Kepler mission.'
      + ' Credits: L. Bugnet ',
    content: 'Our understanding of the universe from exoplanets characterization to galactic archaeology strongly relies on stellar parameter'
      + ' estimates and on our understanding of stellar dynamics. It is therefore concerning that our understanding of stellar internal dynamics'
      + ' and our ability to characterize stellar surface properties still does not result into precise estimates of the age of astrophysical'
      + ' systems they compose (10-20% error at best). Large photometric space programs dedicated to'
      + ' the study of stellar and planetary systems (CoRoT, Kepler, K2, and TESS) allow statistical studies on the properties of millions'
      + ' of stars. These space missions revolutionized stellar physics in the past 15 years, shifting our vision of stars from static towards'
      + ' hydrodynamic bodies, and unveiling the physical mechanisms governing their evolution. In most part, such a turning point has'
      + ' been made possible through asteroseismology, which has then become one of the leading methods for the characterization of'
      + ' stars. This recent branch of stellar physics consists of the analysis of oscillations of stars induced by stationary waves. It is the'
      + ' analogy of seismology on Earth, as it allows to probe the internal structure and dynamics of the body.'
      + ' Precise enough asteroseismology estimates of stellar parameters (such as the surface gravity) to'
      + ' efficiently constrain stellar model can only be automatically obtained for the few thousands stars'
      + ' that are observed with a good signal-to-noise ratio with visible oscillation modes in the data. The'
      + ' stellar physics community therefore faces a strong need for automatic analysis tools to measure precise surface parameters'
      + ' from millions of stars to be observed during TESS and soon PLATO missions.',
    points: [
      'Machine learning for the automatic classification and characterisation of stars',
      'Photometric data analysis from the Kepler, K2 and TESS missions',
      'Preparation of the automatic analysis pipeline for the PLATO mission',

    ],
  },
];

export default data;
