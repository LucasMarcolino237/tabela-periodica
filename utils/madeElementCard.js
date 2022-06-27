import styles from '../styles/ElementCard.module.css';
import Link from 'next/link';


function madeElementCard(element) {
                    
    const { name, symbol, atomicNumber, atomicMass, groupBlock } = element;
    const group = groupBlock;
    const id = atomicNumber;

    const css = {
        2:styles.elementContainer2,
        3:styles.elementContainer3,
        5:styles.elementContainer5,
        13:styles.elementContainer13,
        72:styles.elementContainer72,
        104:styles.elementContainer104,
        56:styles.elementContainer56,
        88:styles.elementContainer88,
    };
    
    const currentCSS = (id) => {
        if (css[`${id}`]) { return css[`${id}`] } else { return styles.elementContainer };
    };

    // return (<li> { element.name } </li>)
    if (group === "lanthanoid" || group === "actinoid" || name === "Lawrencium") return; 

    
    return (
        
        <Link href={`/table/${name}`}>
            <a  className={currentCSS(id)}>    
                <div className={styles.elementCard}>
                    <h4 className={styles.number}>{ atomicNumber }</h4>
                    <h1 className={styles.symbol}>{ symbol }</h1>
                    <spam className={styles.mass}>{ atomicMass }</spam>
                    <h3 className={styles.name}>{ name }</h3>
                </div>
            </a>
        </Link>
            
)};

export default madeElementCard;