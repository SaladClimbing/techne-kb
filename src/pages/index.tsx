import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const topics = [
  {
    title: 'Getting Started',
    description: 'Course overview, tools setup, and your first steps.',
    link: '/docs/tips-&-tricks/antigravity-tips',
    icon: '🚀',
  },
  {
    title: 'R & Tidyverse',
    description: 'Data manipulation, analysis, and programming with R.',
    link: '/docs/tips-&-tricks/antigravity-tips',
    icon: '📊',
  },
  {
    title: 'Python',
    description: 'Python fundamentals for data science.',
    link: '/docs/tips-&-tricks/antigravity-tips',
    icon: '🐍',
  },
  {
    title: 'Statistics',
    description: 'Statistical thinking, probability, and inference.',
    link: '/docs/tips-&-tricks/antigravity-tips',
    icon: '📈',
  },
  {
    title: 'Machine Learning',
    description: 'Supervised and unsupervised learning methods.',
    link: '/docs/tips-&-tricks/antigravity-tips',
    icon: '🤖',
  },
  {
    title: 'Visualization',
    description: 'Communicating data through effective graphics.',
    link: '/docs/tips-&-tricks/antigravity-tips',
    icon: '🎨',
  },
  {
    title: 'Data Wrangling',
    description: 'Cleaning, transforming, and reshaping data.',
    link: '/docs/tips-&-tricks/antigravity-tips',
    icon: '🔧',
  },
];

function HeroBanner() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          PPBDS Knowledgebase
        </Heading>
        <p className="hero__subtitle">
          Everything you need for the data science course
        </p>
      </div>
    </header>
  );
}

function TopicCards() {
  return (
    <section className={styles.topics}>
      <div className="container">
        <div className="row">
          {topics.map((topic) => (
            <div key={topic.title} className={clsx('col col--4', styles.topicCard)}>
              <Link to={topic.link} className={styles.topicLink}>
                <div className={styles.topicIcon}>{topic.icon}</div>
                <Heading as="h3">{topic.title}</Heading>
                <p>{topic.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="PPBDS Data Science Knowledgebase">
      <HeroBanner />
      <main>
        <TopicCards />
      </main>
    </Layout>
  );
}
