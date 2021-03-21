import axios from 'axios';
import { useRouter } from 'next/router'

function Element( { element = {} }) {
    const router = useRouter()

    if (router.isFallback) return <h1>Searching this element...</h1>

    console.log(element)
    return (
        <table border='1px solid black'>
            <caption>{ element.name }</caption>
            <tbody>
                <tr>
                    <th>
                        Símbolo atômico
                    </th>
                    <td>
                        { element.symbol }
                    </td>
                </tr>
                <tr>
                    <th>
                        Número atômico
                    </th>
                    <td>
                        { element.atomicNumber }
                    </td>
                </tr>
                <tr>
                    <th>
                        Massa atômica
                    </th>
                    <td>
                        { element.atomicMass }
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
export async function getStaticProps(context) {
    const res = await axios.get(
        'https://periodic-table-api.herokuapp.com/atomicName/' + context.params.id
    );
    const data = await res.data;

    return {
        props: { element: data },
    };
}

export async function getStaticPaths() {
    const res = await axios.get('https://periodic-table-api.herokuapp.com/')
    const elements = await res.data

    const paths = elements.map((element) => {
        return { params: {id: String(element.name) } };
    });

    return {
        paths,
        fallback: true // See the "fallback" section below
    };
}

export default Element;