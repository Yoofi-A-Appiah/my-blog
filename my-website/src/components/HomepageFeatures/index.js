import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
 
  {
    title: 'Simplified Tutorials',
    Svg: require('@site/static/img/learn1.svg').default,
    description: (
      <>
        A simplified learning experience
      </>
    ),
    location: '/blog',
    innertext:'Start Learning',
  },
  {
    title: 'Latest Tech news',
    Svg: require('@site/static/img/chip.svg').default,
    description: (
      <>
        
        What's trending today?<br></br>
        Find out Here
        </>
    ),
    location: '/docs/about',
    innertext:"Tech News",
  },
  
];

function Feature({Svg, title, description,location,innertext}) {
  return (
    <div className={clsx('col col--4')}>
      
      <div className="text--center">
     
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <Link className="button button--secondary button--lg"
            
            to={location}>{innertext}
        </Link>
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
