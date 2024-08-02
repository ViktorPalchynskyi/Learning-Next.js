import UserForm from '@/components/Form/UserForm';
import Link from 'next/link';

export default function UserPage() {
    return (
        <div>
            <h1>User Page</h1>
            <ul>
                <li>
                    <Link href={'/user/some/more/1'}>User 1</Link>
                </li>
                <li>
                    <Link href={'/user/some/more/error/provoce/condition/2'}>User 2</Link>
                </li>
                <li>
                    <Link href={'/user/some/more/3'}>User 3</Link>
                </li>
            </ul>
            <UserForm />
        </div>
    );
}
