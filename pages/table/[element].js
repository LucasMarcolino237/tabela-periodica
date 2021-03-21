import Link from 'next/link';
import { useRouter } from 'next/router';
import { getElementBy, getAllElements } from '../../utils/table-info.js';

function Element( { elementInfo = {} }) {
    const router = useRouter()

    if (router.isFallback) return <h1>Searching this element...</h1>

    return (
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <table border='1px solid black'>
                <caption>{ elementInfo.name }</caption>
                <tbody>
                    <tr>
                        <th>
                            Símbolo atômico
                        </th>
                        <td>
                            { elementInfo.symbol }
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Número atômico
                        </th>
                        <td>
                            { elementInfo.atomicNumber }
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Massa atômica
                        </th>
                        <td>
                            { elementInfo.atomicMass }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export async function getStaticProps(context) {
    const data = await getElementBy('name', context.params.element)

    return {
        props: { elementInfo: data },
    };
}

export async function getStaticPaths() {
    const elements = await getAllElements();

    const paths = elements.map((element) => {
        
        return { params: { element: String(element.name) } };
    });

    return {
        paths,
        fallback: true // See the "fallback" section below
    };
}

export default Element;