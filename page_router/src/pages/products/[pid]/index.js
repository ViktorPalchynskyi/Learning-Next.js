import { promises as fs } from 'fs';
import path from 'path';

const getProducts = async () => {
    const filePath = path.join(process.cwd(), '/data/dummy-backend.json');
    const jsonFile = await fs.readFile(filePath);
    const data = JSON.parse(jsonFile);

    return data.products;
};

export async function getStaticPaths() {
    const data = await getProducts();

    return {
        paths: data?.map(({ id }) => ({ params: { pid: id } })),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;

    const productId = params.pid;
    const data = await getProducts();

    const product = data.find((product) => product.id === productId);

    return {
        props: {
            product,
        },
    };
}

export default function ProductDetailPage({ product }) {
    if (!product) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </>
    );
}
