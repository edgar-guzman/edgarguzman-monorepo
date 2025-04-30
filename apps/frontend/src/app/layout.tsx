import '@/styles/globals.css';
import '@edgarguzman/ui/styles/globals.css';

import type { ChildrenProps } from '@edgarguzman/types/children';
import { Toaster } from '@edgarguzman/ui/sonner';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/providers/theme-provider';

type RootLayoutProps = ChildrenProps;

const inter = Inter({
    subsets: ['latin'],
});

export function viewport(): Viewport {
    return {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        themeColor: [
            {
                media: '(prefers-color-scheme: light)',
                color: 'white',
            },
            {
                media: '(prefers-color-scheme: dark)',
                color: 'black',
            },
        ],
    };
}

export function metadata(): Metadata {
    return {
        title: {
            template: '%s : Edgar Guzman',
            default: 'Edgar Guzman',
        },
        description: 'electronic commerce infrastructure in a monorepo',
        keywords: [
            'open-source',
            'typescript',
            'eslint',
            'commerce',
            'nextjs',
            'postgresql',
            'prettier',
            'prisma',
            'tailwindcss',
            'trpc',
            'next-auth',
            'zod',
            'turborepo',
        ],
        icons: [
            {
                rel: 'icon',
                url: '/images/ed-guz.svg',
            },
        ],
        authors: [
            {
                name: 'Edgar Guzman',
            },
        ],
        creator: 'Edgar Guzman',
        metadataBase: new URL('https://edgarguzman-frontend.vercel.app'),
        openGraph: {
            type: 'website',
            locale: 'en_US',
            title: 'Edgar Guzman',
            description: 'electronic commerce infrastructure in a monorepo',
            siteName: 'Edgar Guzman',
            images: [
                {
                    url: '/images/opengraph-image.svg',
                    width: 1200,
                    height: 630,
                    alt: 'Edgar Guzman',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Edgar Guzman',
            description: 'electronic commerce infrastructure in a monorepo',
            creator: '@edgaralexisguz',
            images: ['/images/opengraph-image.svg'],
        },
    };
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='system'
                        enableSystem
                        disableTransitionOnChange
                    >
                        <ModeToggle />
                        {children}
                        <Toaster />
                    </ThemeProvider>
                </>
            </body>
        </html>
    );
};

export default RootLayout;
