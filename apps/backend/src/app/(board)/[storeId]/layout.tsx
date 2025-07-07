import type { Metadata } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';
import type { ParamsProps } from '@/types/params';

type BoardLayoutProps = React.PropsWithChildren & {
    params: ParamsProps;
};

export function metadata({ params }: BoardLayoutProps): Metadata {
    return createMetadata({
        title: `${params?.storeId} Store`,
        description: 'Store description'
    });
}

const BoardLayout = ({ children }: Readonly<BoardLayoutProps>) => {
    return (
        <>
            {children}
        </>
    );
};

export default BoardLayout;
