import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';
import type { ParamsProps } from '@/types/params';

interface ProductIdProps {
    params: ParamsProps;
}

export const metadata: Metadata = createMetadata({
    title: 'Product Id'
});

const ProductId: NextPage<ProductIdProps> = async ({ params }) => {
  return (
    <main className='h-screen'>
      <div>
        <h1 className='text-2xl font-semibold'>
          Product Id: {params?.productId}
        </h1>
      </div>
    </main>
  );
};

export default ProductId;
