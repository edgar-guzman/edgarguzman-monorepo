import type { NextPage } from 'next';

import { QuantitySelector } from '@/components/quantity-selector';

const Home: NextPage = () => {
    return (
        <main className='h-screen'>
            <div>
                <p>This is the Website Frontend Shop</p>

                <QuantitySelector />
            </div>
        </main>
    );
};

export default Home;
