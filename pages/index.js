import Head from 'next/head';
import { Footer, Header, HomePage, Work, Contact } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ian Wagner</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <HomePage />
        <Work />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
