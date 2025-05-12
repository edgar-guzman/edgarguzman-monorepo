import { subtract } from '@edgarguzman/lib/math/sub-tract';
import { Button } from '@edgarguzman/ui/button';
import type { Metadata, NextPage } from 'next';
import Link from 'next/link';

import { QuantitySelector } from '@/components/quantity-selector';
import { ToastNotification } from '@/components/toast-notification';
import { trpc } from '@/trpc/server';

export function metadata(): Metadata {
    return {
        title: {
            absolute: 'Edgar Guzman',
        },
    };
}

export async function fetchProducts() {
  return await trpc.product.all.query();
}

const Home: NextPage = async () => {
    let products = await fetchProducts();

    return (
        <main>
            <div>
                <h1>Frontend - Web / Public</h1>

                <p>{subtract(1, 2)}</p>

                <QuantitySelector />

                <ToastNotification />

                <div className='mb-4'>
                    {products.map(product => {
                        return (
                            <div className="p-5" key={product.id}>
                                    <Link className='hover:cursor-pointer hover:underline hover:underline-offset-8 cursor-default no-underline' href={`/${product.slug}`} target='_blank'>
                                    <h2 className='text-base font-semibold mb-4'>
                                                    {product.title}
                                                </h2>
                            </Link>

                <p className='mb-4'>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(product.price)}
                </p>

                <Button>Add to Cart</Button>
                            </div>
                        );
                    })}
                </div>

                <Button>Howdy Button</Button>
            </div>
        </main>
    );
};

export default Home;
