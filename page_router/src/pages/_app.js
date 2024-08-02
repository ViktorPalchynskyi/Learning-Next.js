import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/blog">
                            <li>Blog</li>
                        </Link>
                        <Link href="/user">
                            <li>User</li>
                        </Link>
                        <Link href="/products">
                            <li>Products</li>
                        </Link>
                        <Link href="/profile">
                            <li>Profile</li>
                        </Link>
                    </ul>
                </nav>
            </header>
            <Component {...pageProps} />
            <footer>My global footer</footer>
        </>
    );
}
