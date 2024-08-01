'use client';

import { useEffect, useState } from 'react';

export default function NewsPage() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNew = async () => {
            setLoading(true);
            const res = await fetch('http://localhost:8080/news');
            console.log(res);
            if (!res.ok) {
                setLoading(false);
                setError('Fail to load news.');
            }

            const news = await res.json();
           
            setLoading(false);
            setNews(news);
        };

        fetchNew();
    }, []);

    if (loading) {
        return <p>Loading ...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

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
