'use client';
import { useRouter } from 'next/navigation';

export default function RedirectButton({ redirectPath, children }) {
    const router = useRouter();

    function buttonHandler() {
        router.push(redirectPath);
    }

    return <button onClick={buttonHandler}>{children}</button>;
}
