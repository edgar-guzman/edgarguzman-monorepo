import type { Metadata, NextPage } from 'next';
import { notFound } from 'next/navigation';

import { createMetadata } from '@/lib/create-seo-metadata';

export function metadata(): Metadata {
    return createMetadata({
        title: 'Not Found'
    });
}

const NotFound: NextPage = () => {
    return notFound();
};

export default NotFound;
