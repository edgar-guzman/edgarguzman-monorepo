import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';

export function metadata(): Metadata {
    return createMetadata({
        title: 'Orders'
    });
}

const Orders: NextPage = () => {
    return (
        <main>
            <div>
                <h1>Orders</h1>
            </div>
        </main>
    );
};

export default Orders;
