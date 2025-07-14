import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';

export const metadata: Metadata = createMetadata({
    title: 'Sign In'
});

const SignIn: NextPage = () => {
    return (
        <div>
            <div className='border border-black p-4 rounded-lg w-[50vw] min-h-[50vh]'>
                Sign In Form Component
            </div>

            <div className='text-2xl font-semibold capitalize my-4 grid grid-cols-1 place-items-center gap-2'>
                OR
            </div>

            <div className='border border-black p-4 rounded-lg'>
                <button className='text-2xl font-semibold grid grid-cols-2 place-items-center gap-2'>
                    Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default SignIn;
