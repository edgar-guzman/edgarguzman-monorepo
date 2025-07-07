import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';
import type { ParamsProps } from '@/types/params';

interface BoardProps {
    params: ParamsProps;
}

export function metadata({ params }: BoardProps): Metadata {
    return createMetadata({
        title: `${params?.storeId} Store`
    });
}

const Board: NextPage<BoardProps> = ({ params }) => {
    return (
        <div>
            <h1 className='text-2xl font-semibold'>{params?.storeId}</h1>
            <p className=''>Board Store Page</p>
        </div>
    );
};

export default Board;
