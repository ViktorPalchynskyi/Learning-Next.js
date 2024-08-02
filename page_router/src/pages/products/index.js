import path from 'node:path';
import { promises as fs } from 'node:fs';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/data/dummy-backend.json');
    const jsonFile = await fs.readFile(filePath);
    const data = JSON.parse(jsonFile);

    console.log(jsonFile);

    return { props: { products: data.products } };
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
