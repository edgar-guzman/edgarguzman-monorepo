import type { ChildrenProps } from '@edgarguzman/types/children';
import { Inter } from 'next/font/google';

type AuthLayoutProps = ChildrenProps;

const inter = Inter({
    subsets: ['latin'],
});

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <>
                    {children}
                </>
            </body>
        </html>
    );
};

export default AuthLayout;
