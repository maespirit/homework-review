import Head from 'next/head'
import { useState, useEffect } from 'react'
import List from '../list/list'
import { retrieve } from '../retrieve'
import styles from '../styles/Home.module.css'

const Home = ()  => {
  const [articles, setArticles] = useState([]);
  const [offset, setOffset] = useState(0);

  // Fetch of the events
  useEffect(() => {
    retrieve(offset).then((data) => {
      setArticles(x => [...x, ...data])
    });
  }, [offset]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Latest space news !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>🌌 Latest Space News !</h1>
        <List articles={articles} />
        <div className="mt-2 text-center">
          <button onClick={() => setOffset((x) => x + 10)}>More !</button>
        </div>
      </main>

    </div>
  )
}

export default Home;