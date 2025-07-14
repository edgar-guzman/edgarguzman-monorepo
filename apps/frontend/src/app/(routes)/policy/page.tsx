import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';

export const metadata: Metadata = createMetadata({
    title: 'Privacy Policy',
    description: 'Privacy Policy'
});

const Policy: NextPage = () => {
    return (
        <main className='h-screen'>
            <div>
                <h1 className='text-2xl font-semibold'>Privacy Policy</h1>
                <h6 className='text-base font-semibold mt-4'>Last Updated: {new Date().toLocaleDateString()}</h6>
            </div>

            <article className='mt-4'>
                <div>
                    <h2 className='text-xl font-semibold mb-4'>1. Information We Collect</h2>
                    <p>By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using the Services.</p>
                </div>

                <div className='mt-4'>
                    <h2 className='text-xl font-semibold mb-4'>2. Use of Information</h2>
                    <p>By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using the Services.</p>
                </div>
            </article>
        </main>
    );
};

export default Policy;
