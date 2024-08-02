'use client';

export default function AddNewButton({ children }) {
    async function addNewHandler() {
        const res = await fetch('/api/news', { method: 'POST' });
        const newNews = await res.json();
    }

    return <button onClick={addNewHandler}>{children}</button>;
}
