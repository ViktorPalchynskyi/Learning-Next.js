import { promises as fs } from 'fs';
import path from 'path';
import Head from 'next/head';

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
        return <p>Loading...</p>;
    }

    const { title, description } = product;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>{title}</h1>
                <p>{description}</p>
            </main>
        </>
    );
}
