import Link from 'next/link';

export async function generateMetadata({ params, number }) {
    const { id } = params;

    return {
        title: `A blog post #${id}`,
        description: `A random blog number is ${Math.round(Math.random() * 100)}`,
    };
}

export default async function BlogPost({ params }) {
    const { id } = params;

    return (
        <div>
            <h2>Blog Post {id}</h2>
            <p>This is the content of the blog post with ID {id}.</p>
            <Link href={`/blog/${id}/image`}>Image number {id}</Link>
        </div>
    );
}
