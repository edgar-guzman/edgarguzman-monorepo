import { createMetadata } from '@/lib/create-seo-metadata';

type AuthLayoutProps = React.PropsWithChildren;

const AuthLayout = ({ children }: Readonly<AuthLayoutProps>) => {
    return (
        <>
            {children}
        </>
    );
};

export default AuthLayout;
