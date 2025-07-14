import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';
import React from 'react';

import { createMetadata } from '@/lib/create-seo-metadata';

type RootLayoutProps = React.PropsWithChildren;

const familiarPro = localFont({
    src: '../fonts/Familiar Pro-Bold.otf',
    variable: '--font-familiar-pro'
});

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin']
});

export function viewport(): Viewport {
    return {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        themeColor: [
            {
                media: '(prefers-color-scheme: light)',
                color: 'white'
            },
            {
                media: '(prefers-color-scheme: dark)',
                color: 'black'
            }
        ]
    };
}

export const metadata: Metadata = createMetadata({
    title: 'Edgar Guzman'
});

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased`}>
                <Header title='Edgar Guzman' />

                {children}

                <Footer title='Edgar Guzman' />
            </body>
        </html>
    );
};

const Header: React.FC<{
    className?: string;
    title: string;
}> = ({
    className,
    title
}) => {
    return (
        <header className={className}>
            <h1 className={`${familiarPro.className} antialiased text-6xl font-semibold tracking-tight`}>
                <Link href='/'>
                    {title}
                </Link>
            </h1>
        </header>
    );
};

const Footer: React.FC<{
    className?: string;
    title: string;
}> = ({
    className,
    title
}) => {
    return (
        <footer className={className}>
            <h6 className={`${familiarPro.className} antialiased text-2xl font-semibold tracking-tight`}>
                <Link href='/'>
                    {title}
                </Link>
            </h6>
        </footer>
    );
};

export default RootLayout;
