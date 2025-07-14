import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';

export const metadata: Metadata = createMetadata({
    title: 'Cart'
});

const Cart: NextPage = () => {
    return (
        <main className='grid grid-cols-2 items-center justify-center h-screen text-center'>
            <div>
                <h1 className='text-2xl font-semibold'>Shopping Cart</h1>

                <div>
                    Card Item Component
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-semibold'>Summary</h2>

                <div>
                    Summary Component
                </div>
            </div>
        </main>
    );
};

export default Cart;
