'use client';

import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const NotFound: NextPage = () => {
    let router = useRouter();

    return (
        <main className='h-[60vh] py-20 flex flex-col items-center'>
            <h1 className='font-black text-4xl text-black mb-4'>404 Not Found</h1>
            <p>Oh uh.. looks like the page you&apos;re looking for doesn&apos;t exist</p>
            <button
                className='py-2 px-5 mt-5 bg-black text-white hover:bg-[#ffff00] hover:text-black font-semibold'
                onClick={() => router.push('/')}>
                Back Home
            </button>
        </main>
    );
};

export default NotFound;
