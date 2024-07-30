import Link from 'next/link';

export default function Home() {
    const photos = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <main>
            <h1>Hello there</h1>
            <section className="cards-container">
                {photos.map((id) => (
                    <Link className="card" key={id} href={`/photos/${id}`}>
                        {id}
                    </Link>
                ))}
            </section>
        </main>
    );
}
