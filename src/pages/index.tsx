import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const topics = [
  {
    title: 'Techne Fundamentals',
    description: 'Core concepts and tools for the Techne data science course.',
    link: '/docs/techne-fundamentals/terminal-basics',
    icon: '📚',
  },
  {
    title: 'VS Code',
    description: 'Tips & tricks for using Visual Studio Code both locally and in GitHub Codespaces.',
    link: '/docs/vs-code/vscode-tips',
    icon: '💻',
  },
  {
    title: 'Source Control',
    description: 'Tips & tricks for Git, GitHub, and GitHub Codespaces.',
    link: '/docs/source-control/git-tips',
    icon: '🔀',
  },
  {
    title: 'Tips & Tricks',
    description: 'Random tips & tricks for different tools.',
    link: '/docs/tips-&-tricks/ai-prompting-tips',
    icon: '💡',
  },
];

function HeroBanner() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Techne Knowledgebase
        </Heading>
        <p className="hero__subtitle">
          Core concepts, tools, and tips for the data science course
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
      description="Techne Data Science Knowledgebase">
      <HeroBanner />
      <main>
        <TopicCards />
      </main>
    </Layout>
  );
}
