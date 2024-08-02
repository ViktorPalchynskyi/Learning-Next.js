// import UserForm from '@/components/Form/UserForm';
import RedirectButton from '@/components/Button/RedirectButton';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function UserPage() {
    // redirect('/home')
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
            <RedirectButton redirectPath={'/blog'}>Go to blog</RedirectButton>
            {/* <UserForm /> */}
        </div>
    );
}
