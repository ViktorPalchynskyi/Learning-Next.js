'use server';

import { revalidatePath } from 'next/cache';

export async function POST(req) {
    const res = await fetch('http://localhost:8080/add/news', {
        method: 'POST',
        body: JSON.stringify({ title: 'Some title for new' }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    const path = req.nextUrl;
    console.log(path.pathname);
    if (!res.ok) {
        return new Response(JSON.stringify({ message: 'faild to fetch', error: true }), {
            status: 500,
            headers: {
                'Content-type': 'application/json',
            },
        });
    }

    const newNews = await res.json();

    revalidatePath('/news');

    return Response.json({ revalidated: true, success: true });
}
