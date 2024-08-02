import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BlogPost() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <p>Just a page</p>
            <h2>Blog Post {id}</h2>
            <p>This is the content of the blog post with ID {id}.</p>
            <Link href={`/blog/${id}/image44`}>Image number {id}</Link>
        </div>
    );
}
