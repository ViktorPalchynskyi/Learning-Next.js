import { notFound } from 'next/navigation';

export default function UserPersonalPage({ params }) {
    const { id } = params;

    if (id.length > 4) {
        throw new Error('Too many options!');
    }

    if (id[2] === '1') {
        notFound();
    }

    return (
        <div>
            <h1>Personal Page</h1>
            <p>Id: {id && id.join('/')}</p>
        </div>
    );
}
