import type { MetadataRoute } from 'next';

import { trpc } from '@/trpc/server';

type Link = {
    url: string;
    lastModified: Date;
};

export async function fetchProducts() {
    return await trpc.product.all.query();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let products = await fetchProducts();

    let baseUrl: string = process.env.VERCEL_URL
        ? 'https://edgarguzman.co'
        : 'http://localhost:3000';

    let links: Link[] = [
        {
            url: baseUrl,
            lastModified: new Date()
        }
    ];

    products.forEach(product => {
        links.push({
            url: `${baseUrl}/${product.slug}`,
            lastModified: new Date()
        });
    });

    return links;
}
