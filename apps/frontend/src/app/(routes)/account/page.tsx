import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';

export const metadata: Metadata = createMetadata({
    title: 'Account'
});

const Account: NextPage = () => {
    return (
        <main className='grid grid-cols-2 grid-rows-1 min-h-screen m-0 p-0'>
            <div className='w-full'>
                <h1 className='text-2xl font-semibold'>Account</h1>

                <div>
                    Account Tab Component (Profile, Orders)
                </div>
            </div>

            <div className='w-full'>
                <h2 className='text-2xl font-semibold'>Profile</h2>

                <div>
                    Profile Information Component (Form)
                </div>
            </div>
        </main>
    );
};

export default Account;
