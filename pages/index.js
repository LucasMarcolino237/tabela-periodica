import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getAllElements } from '../utils/table-info.js';
// import Link from 'next/link';

function Home({ periodicTable = {} } ) {
    function showElements() {
        return (
            <section className={styles.grid}>

                { periodicTable.map(element => {
                                        
                    const { name, symbol, atomicNumber, atomicMass, groupBlock } = element;
                    const group = groupBlock;
                    const id = atomicNumber;

                    const css = {
                        2:styles.elementCard2,
                        3:styles.elementCard3,
                        5:styles.elementCard5,
                        13:styles.elementCard13,
                        72:styles.elementCard72,
                        104:styles.elementCard104,
                        56:styles.elementCard56,
                        88:styles.elementCard88,
                    };
                    
                    const currentCSS = (id) => {
                        if (css[`${id}`]) { return css[`${id}`] } else { return styles.elementCard };
                    };

                    // return (<li> { element.name } </li>)
                    if (group === "lanthanoid" || group === "actinoid" || name === "Lawrencium") return; 

                    
                    return (
                        
                        <div className={currentCSS(id)}>
                            <h4 className={styles.number}>{ atomicNumber }</h4>
                            <h1 className={styles.symbol}>{ symbol }</h1>
                            <spam className={styles.mass}>{ atomicMass }</spam>
                            <h3 className={styles.name}>{ name }</h3>
                        </div>
                    
                    )}
                )};

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
            <aside className={styles.code}>
            <h1>props</h1>
            <section className={styles.description}>
                <p>description</p>
            </section>
            </aside>
            <article>
                <h1 className={styles.title}>Periodic table</h1>
                { showElements() }
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