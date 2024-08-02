import { useRouter } from 'next/router';

export default function UserPersonalPage() {
    const router = useRouter();
    const { id } = router.query;
  
    if (id?.length > 4) {
        throw new Error('Too many options!');
    }


    return (
        <div>
            <h1>Personal Page</h1>
            <p>Id: {id && id.join('/')}</p>
        </div>
    );
}
