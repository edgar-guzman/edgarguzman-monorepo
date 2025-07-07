import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';
import type { ParamsProps } from '@/types/params';

interface ProductsProps {
    params: ParamsProps;
}

export function metadata(): Metadata {
    return createMetadata({
        title: 'Product Id'
    });
}

const ProductId: NextPage<ProductsProps> = ({ params }) => {
    return (
        <main>
            <div>
                <h1>Product Id</h1>
                <p>{params?.productId}</p>
            </div>
        </main>
    );
};

export default ProductId;
