import type { Metadata, NextPage } from 'next';
import localFont from 'next/font/local';

import { createMetadata } from '@/lib/create-seo-metadata';

const familiarPro = localFont({
    src: '../fonts/Familiar Pro-Bold.otf',
    variable: '--font-familiar-pro'
});

export const metadata: Metadata = createMetadata({
    title: 'Loading'
});

const Loading: NextPage = () => {
    return (
        <main className='grid min-h-screen grid-cols-1 grid-rows-1'>
            <div className='grid min-h-screen w-full place-items-center'>
                <h1 className={`${familiarPro.className} text-xl tracking-tight`}>Loading</h1>
            </div>
        </main>
    );
};

export default Loading;
