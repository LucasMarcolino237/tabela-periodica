import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getAllElements } from '../utils/table-info.js';
import madeElementCard from '../utils/madeElementCard';

function Home({ periodicTable = {} } ) {
    function showElements() {
        return (
            <section className={styles.grid}>

                { periodicTable.map(element => { return madeElementCard(element) }) } 

            </section>
        )
    };
    
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
            {/* <aside className={styles.code}>
            <h1>props</h1>
            <section className={styles.description}>
                <p>description</p>
            </section>
            </aside> */}
            <article>
                <h1 className={styles.title}>Periodic table</h1>
                <div>{ showElements() }</div>
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
};

export async function getStaticProps(context) {
    const data = await getAllElements();

    return {
        props: { periodicTable: data },
    };
};

export default Home;