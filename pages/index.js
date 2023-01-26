import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi everyone</p>
        <p>
          This is a sample website - that i try to make by myself{' '}
          <a href='https://nextjs.org/learn'>my Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
