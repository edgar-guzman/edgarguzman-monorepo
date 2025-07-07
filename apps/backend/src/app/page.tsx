import type { Metadata, NextPage } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';

import { createMetadata } from '@/lib/create-seo-metadata';

const familiarPro = localFont({
    src: '../fonts/Familiar Pro-Bold.otf',
    variable: '--font-familiar-pro'
})

export const metadata = createMetadata({
    title: 'Edgar Guzman',
    description: ''
});

const Homepage: NextPage = () => {
    return (
        <main>
            <div>
                <Link className='no-underline cursor-default hover:underline hover:underline-offset-8 hover:cursor-pointer' href='/'>
                    <h1 className={`${familiarPro.className} text-xl tracking-tight antialiased`}>Edgar Guzman</h1>
                </Link>

                <div>
                    <p>Howdy Everyone, This is a e-commerce website shop.</p>
                    <p>Where you can purchase Edgar handcrafted products</p>
                </div>
            </div>
        </main>
    );
};

export default Homepage
