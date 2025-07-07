import type { NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';

export const metadata = createMetadata({
    title: 'Sign Up'
});

const SignUp: NextPage = () => {
    return (
        <main className=''>
            <div className=''>
                <h1 className=''>
                    Sign Up
                </h1>

                <div className=''>
                    Sign Up Form Component
                </div>
            </div>
        </main>
    );
};

export default SignUp;
