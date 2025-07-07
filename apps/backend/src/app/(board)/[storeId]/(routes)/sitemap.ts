import type { MetadataRoute } from 'next';

import type { ParamsProps } from '@/types/params';

type Store = {
    id: string;
    title: string;
    slug: string;
};

type Product = {
    id: string;
    title: string;
    slug: string;
};

interface SitemapProps {
    params: ParamsProps;
}

export const dynamic = 'force-dynamic'

export default async function sitemap({ params }: SitemapProps): Promise<MetadataRoute.Sitemap> {
    let protocol: string = process.env.NODE_ENV === 'production' ? 'https' : 'http';

    let productionUrl: string | undefined = process.env.VERCEL_PROJECT_PRODUCTION_URL;

    let stores: Store[] = [
        {
            id: '',
            title: 'Store One',
            slug: params?.storeId?.toLowerCase()
        },
        {
            id: '',
            title: 'Store Two',
            slug: params?.storeId?.toLowerCase()
        },
        {
            id: '',
            title: 'Store Three',
            slug: params?.storeId?.toLowerCase()
        },
        {
            id: '',
            title: 'Store Four',
            slug: params?.storeId?.toLowerCase()
        },
        {
            id: '',
            title: 'Store Five',
            slug: params?.storeId?.toLowerCase()
        }
    ];

    let products: Product[] = [
        {
            id: '',
            title: 'Product One',
            slug: 'product-one'
        },
        {
            id: '',
            title: 'Product Two',
            slug: 'product-two'
        },
        {
            id: '',
            title: 'Product Three',
            slug: 'product-three'
        },
        {
            id: '',
            title: 'Product Four',
            slug: 'product-four'
        },
        {
            id: '',
            title: 'Product Five',
            slug: 'product-five'
        }
    ];

    return [
        ...stores.map((store) => {
            return {
                url: `${protocol}://${productionUrl}/${store.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 1
            };
        }),
        ...products.map((product) => {
            return {
                url: `${protocol}://${productionUrl}/${stores[0]?.slug}/${product.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 1
            };
        })
    ];
}
