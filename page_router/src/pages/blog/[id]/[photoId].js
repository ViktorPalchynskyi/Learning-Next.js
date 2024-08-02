import { useRouter } from 'next/router';

export default function BlogImagePage() {
    const router = useRouter();
    const { id, photoId } = router.query;

    return (
        <div>
            <h1>Image for blog number {id} and photo nubmer {photoId}</h1>
        </div>
    );
}
