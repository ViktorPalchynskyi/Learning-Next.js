export default async function NewsPage() {
    const res = await fetch('http://localhost:8080/news');

    if (!res.ok) {
        return <p>Failed to fetch news</p>;
    }

    const news = await res.json();

    return (
        <div>
            <ul>
                {!!news.length &&
                    news.map(({ title, date }) => (
                        <li key={date}>
                            <p>{title}</p>
                            <p>Date: {date}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
