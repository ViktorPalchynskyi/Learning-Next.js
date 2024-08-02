import Link from 'next/link';

export async function getServerSideProps(contex) {
    const { params, req, res } = contex;

    console.log('req', req);
    console.log('params', params);
    console.log('res', res);
    console.log('contex', contex);

    return {
        props: {
            username: 'Viktor',
        },
    };
}

export default function UserProfilePage({ username }) {
    return (
        <h1>
            {username} <Link href={'profile/123'}>Click here</Link>
        </h1>
    );
}
