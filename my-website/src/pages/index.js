import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import  { Redirect } from 'react-router-dom';

import styles from './index.module.css';
import Head from '@docusaurus/Head';


export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <Head>
      <meta name="propeller" content="ad5b38b95f726654cab26a16d857bdf9" />
      React.createElement(
  "script",
  null,
  "(function(s,u,z,p)",
  ((s.src = u), s.setAttribute("data-zone", z), p.appendChild(s)),
  ")(document.createElement('script'),'https://inklinkor.com/tag.min.js',5271487,document.body||document.documentElement)"
);
              </Head>
              <Redirect to='/blog' />;

    </Layout>
    
  );
  return 

}
