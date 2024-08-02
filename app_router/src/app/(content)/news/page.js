import { Suspense } from 'react';

export default async function NewsPage() {
    const newsRes = await fetch('http://localhost:8080/news');
    const articleRes = await fetch('http://localhost:8080/articles');

    if (!newsRes.ok || !articleRes.ok) {
        return <p>Failed to fetch news</p>;
    }

    const news = await newsRes.json();
    const articles = await articleRes.json();

    return (
        <div>
            <Suspense fallback={<p>Loading articles...</p>}>
                <ul>
                    {!!articles.length &&
                        articles.map(({ title, date }) => (
                            <li key={date}>
                                <p>Article: title{title}</p>
                                <p>Article date: {date}</p>
                            </li>
                        ))}
                </ul>
            </Suspense>
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
