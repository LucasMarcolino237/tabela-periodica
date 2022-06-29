import styles from '../styles/ElementCard.module.css';
import Link from 'next/link';


function madeElementCard(element) {
    
    const { name, symbol, atomicNumber, atomicMass} = element;
    
    let { groupBlock } = element;
    if (groupBlock === "halogen" && name === "Astatine") { groupBlock = "metalloid" };
    if (name === "Lawrencium") {groupBlock = "actinoid"};

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

    const groupColor = {
        "nonmetal":styles.nonmetal,
        "halogen":styles.nonmetal,
        "noble gas":styles.nobleGas,
        "alkali metal":styles.alkaliMetal,
        "alkaline earth metal":styles.alkaliEarthMetal,
        "metalloid":styles.metalloid,
        "transition metal":styles.transitionMetal,
        "metal":styles.metal,
        "lanthanoid":styles.lanthanoid,
        "actinoid":styles.actnoid,
        "post-transition metal":styles.postTrasitionMetal,

    }
    
    const currentCSS = (id) => { if (css[`${id}`]) { return css[`${id}`] } else { return styles.elementContainer };};
    const currentGroupColor = (group) => {return groupColor[`${group}`]}

    if (group === "lanthanoid" || group === "actinoid") return;  

    return (
        
        <Link href={`/table/${name}`}>
            <a  className={currentCSS(id)}>
                <div className={currentGroupColor(group)}> 
                    <h4 className={styles.number}>{ atomicNumber }</h4>
                    <h1 className={styles.symbol}>{ symbol }</h1>
                    <spam className={styles.mass}>{ atomicMass }</spam>
                    <p className={styles.name}>{ name }</p>
                </div>
            </a>
        </Link>
            
)};

export default madeElementCard;