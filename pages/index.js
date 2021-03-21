import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getAllElements } from '../utils/table-info.js';
import Link from 'next/link';

function Home({ periodicTable = {} } ) {
    function showElements() {
        return (
            <ul>
                { periodicTable.map(element => {
                    
                    // return (<li> { element.name } </li>)
                    return (
                        <li>
                            <Link href={ `/table/${encodeURIComponent(element.name)}` }>
                                <a>{ element.name }</a>
                            </Link>
                        </li>)
                }) }
            </ul>
        )

    }
    
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
                { showElements() }
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
export async function getStaticProps(context) {
    const data = await getAllElements();

    return {
        props: { periodicTable: data },
    };
}
export default Home;