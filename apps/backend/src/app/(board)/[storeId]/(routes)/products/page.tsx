import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';

export function metadata(): Metadata {
    return createMetadata({
        title: 'Products'
    });
}

const Products: NextPage = () => {
    return (
        <main>
            <div>
                <h1>Products</h1>
            </div>
        </main>
    );
};

export default Products;
