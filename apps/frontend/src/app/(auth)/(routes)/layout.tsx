import type React from 'react';

type AuthLayoutProps = React.PropsWithChildren;

const AuthLayout = ({ children }: Readonly<AuthLayoutProps>) => {
    return (
        <>
            <main className='grid min-h-screen place-items-center bg-slate-500'>
                {children}
            </main>
        </>
    );
};

export default AuthLayout;
