import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const isAuthed = request.cookies.get('authToken');

    // if (!isAuthed && !pathname.startsWith('/home')) {
    //     return NextResponse.redirect(new URL('/home', request.url))
    // }

    return NextResponse.next();
}

export const config = {
    // matcher: '/home',
};
