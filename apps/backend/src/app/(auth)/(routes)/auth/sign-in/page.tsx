import type { NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';

export const metadata = createMetadata({
    title: 'Sign In',
    description: 'Sign In Page'
});

const SignIn: NextPage = () => {
    return (
        <main className=''>
            <div className=''>
                <h1 className=''>
                    Sign In
                </h1>

                <div className=''>
                    Sign In Form Component
                </div>
            </div>
        </main>
    );
};

export default SignIn;
