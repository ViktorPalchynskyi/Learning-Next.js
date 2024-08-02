import path from 'node:path';
import { promises as fs } from 'node:fs';

export async function getStaticProps() {
    console.log('Re...');

    const filePath = path.join(process.cwd(), '/data/dummy-backend.json');
    const jsonFile = await fs.readFile(filePath);
    const data = JSON.parse(jsonFile);

    return { props: { products: data.products }, revalidate: 10 };
}

export default function ProductPage({ products }) {
    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </div>
    );
}
