import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'About Khacks',
    Svg: require('../../static/img/khlogo.svg').default,
    description: (
      <>
        KarunyaHacks is a student organization affiliated to Karunya Innovation and Design Studio at Karunya Institute of Technology and Sciences. We aim to serve students in their professional pursuit of learning and research. We help students to take up projects to solve problems in areas related to Water, Food, Health and Energy through scientific innovation and technological research.
      </>
    ),
  },
  {
    title: 'What is Generative AI?',
    Svg: require('../../static/img/ailogo.svg').default,
    description: (
      <>
        Generative artificial intelligence is artificial intelligence capable of generating text, images, or other media in response to prompts.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
