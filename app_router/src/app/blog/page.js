import Link from 'next/link';


export default function BlogPage() {
    return (
        <div>
            <h1>Blog Page</h1>
            <ul>
                <li>
                    <Link href={'/blog/1'}>Blog 1</Link>
                </li>
                <li>
                    <Link href={'/blog/2'}>Blog 2</Link>
                </li>
                <li>
                    <Link href={'/blog/3'}>Blog 3</Link>
                </li>
                <li>
                    <Link href={'/blog/new'}>New Blog</Link>
                </li>
            </ul>
        </div>
    );
}
