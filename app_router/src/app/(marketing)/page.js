import Link from 'next/link';

export default function MarketingHomePage() {
    return (
        <div>
            <h1>Some marketing stuff</h1>
            <Link href={'/home'}>Go to main content</Link>
        </div>
    );
}
