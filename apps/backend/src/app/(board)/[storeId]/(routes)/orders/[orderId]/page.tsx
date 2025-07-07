import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';
import type { ParamsProps } from '@/types/params';

interface OrderIdProps {
    params: ParamsProps;
}

export function metadata(): Metadata {
    return createMetadata({
        title: 'Order Id'
    });
}

const OrderId: NextPage<OrderIdProps> = ({ params }) => {
    return (
        <main>
            <div>
                <h1>Order Id</h1>
                <p>{params?.orderId}</p>
            </div>
        </main>
    );
};

export default OrderId;
