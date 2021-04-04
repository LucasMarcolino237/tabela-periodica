import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getAllElements } from '../utils/table-info.js';
import Link from 'next/link';

function Home({ periodicTable = {} } ) {
    function showElements() {
        return (
            <div class={styles.elements}>

                { periodicTable.map(element => {
                                        
                    let { name, symbol, atomicNumber, atomicMass, groupBlock } = element;
                    const group = groupBlock;

                    // return (<li> { element.name } </li>)
                    if (name === "Technetium") atomicMass = "98";
                    if (name === "Promethium") atomicMass = "145";
                    return (
                    <Link href={ `/table/${encodeURIComponent(name)}` }>
                        <div class={styles.elementCard}>
                            <h4 class="number">{ atomicNumber }</h4>
                            <h1 class="symbol">{ symbol }</h1>
                            <spam class="mass">{ atomicMass }</spam>
                            <h3 class="name">{ name }</h3>
                            <small class="group">Group: <span>{group}</span></small>
                        </div>
                    </Link>
                    
                    )}
                )}

            </div>
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