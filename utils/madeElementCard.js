import styles from '../styles/ElementCard.module.css';
import Link from 'next/link';


function madeElementCard(element) {
    
    const { nome, simbolo, numero, massa} = element;
    
    let { grupo } = element;
    if (grupo === "Halogênio" && nome === "Astato") { grupo = "Semimetal" };
    // if (nome === "Laurêncio") {grupo = "Actinídeo"};

    const group = grupo;
    const id = numero;

    const css = {
        2:styles.elementContainer2,
        3:styles.elementContainer3,
        5:styles.elementContainer5,
        13:styles.elementContainer13,
        72:styles.elementContainer72,
        104:styles.elementContainer104,
        56:styles.elementContainer56,
        57:styles.elementContainer57,
        88:styles.elementContainer88,
        89:styles.elementContainer89,
        "Lantanídeo":styles.elementContainerLanthanoid,
        "Actinídeo":styles.elementContainerActinoid,
    };

    const groupColor = {
        "Não metal":styles.nonmetal,
        "Halogênio":styles.nonmetal,
        "Gás nobre":styles.nobleGas,
        "Metal alcalino":styles.alkaliMetal,
        "Metal alcalinoterroso":styles.alkaliEarthMetal,
        "Semimetal":styles.metalloid,
        "Metal de transição":styles.transitionMetal,
        "Metal":styles.metal,
        "Lantanídeo":styles.lanthanoid,
        "Actinídeo":styles.actinoid,
        "Metal de pós transição":styles.postTrasitionMetal,

    }
    
    const currentCSS = (key) => { if (css[`${key}`]) { return css[`${key}`] } else { return styles.elementContainer };};
    const currentGroupColor = (group) => {return groupColor[`${group}`]}

    if (group === "Lantanídeo" || group === "Actinídeo") {
        if  (id === 57 || id === 89) {
            return (
                <div className={currentCSS(Number(id))}> 
                    <div className={styles.lanthanoid}>
                        <h4 className={styles.simbolo}>{ `${Number(id)} - ${Number(id)+14}` }</h4>
                    </div>
                </div>
            )
        }
        // return ('
        //     <Link href={`/table/${nome}`}>
        //         <a  className={currentCSS(group)}>
        //             <div className={currentGroupColor(group)}> 
        //                 <h4 className={styles.number}>{ numero }</h4>
        //                 <h1 className={styles.simbolo}>{ simbolo }</h1>
        //                 <spam className={styles.mass}>{ massa }</spam>
        //                 <p className={styles.nome}>{ nome }</p>
        //             </div>
        //         </a>
        //     </Link>
        // )
    } else {
        return (
            <Link href={`/table/${nome}`}>
                <a  className={currentCSS(id)}>
                    <div className={currentGroupColor(group)}> 
                        <h4 className={styles.number}>{ numero }</h4>
                        <h1 className={styles.symbol}>{ simbolo }</h1>
                        <spam className={styles.mass}>{ massa }</spam>
                        <p className={styles.name}>{ nome }</p>
                    </div>
                </a>
            </Link>    
        )
    };
}


export default madeElementCard;