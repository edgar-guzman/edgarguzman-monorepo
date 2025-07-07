import '@/styles/globals.css';

import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

type RootLayoutProps = React.PropsWithChildren;

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
};

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
  );
};

export default RootLayout
