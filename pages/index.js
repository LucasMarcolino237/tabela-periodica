import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Periodic table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>
          <nav className={styles.nav}>
            <div className={styles.card}>
              <p>
                test 1
              </p>
            </div>
            <div className={styles.card}>
              <p>
                test 2
              </p>
            </div>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <aside>
          <h1>props</h1>
          <section>
            <p>description</p>
          </section>
        </aside>
        <article>
          <h1>Periodic table</h1>
          <section>
            <ul>
              <li>
                <a href='/table/Hydrogen'>Hydrogen</a>
              </li>
              <li>item 2</li>
            </ul>
          </section>
        </article>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/LucasMarcolino237"
          target="_blank"
          rel="noopener noreferrer"
        >
          <address>Powered by Lucas Marcolino</address>
        </a>
      </footer>
    </div>
  )
}

export default Home;