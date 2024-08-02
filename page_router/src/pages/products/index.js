import path from 'node:path';
import { promises as fs } from 'node:fs';
import Link from 'next/link';

const getProducts = async () => {
    const filePath = path.join(process.cwd(), '/data/dummy-backend.json');
    const jsonFile = await fs.readFile(filePath);
    const data = JSON.parse(jsonFile);

    return data.products;
};

export async function getStaticProps(context) {
    const data = await getProducts();

    if (!data) {
        return {
            redirect: {
                destination: '/',
            },
        };
    }

    if (!data.length) {
        return { notFound: true };
    }

    return { props: { products: data }, revalidate: 10 };
}

export default function ProductPage({ products }) {
    return (
        <div>
            <h2>Products</h2>
            {products.map(({ id, title }) => (
                <li key={id}>
                    <Link href={`/products/${id}`}>{title}</Link>
                </li>
            ))}
        </div>
    );
}
