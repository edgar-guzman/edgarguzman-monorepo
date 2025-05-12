import type { MetadataRoute } from 'next';

import { trpc } from '@/trpc/server';

type Link = {
    url: string;
    lastModified: Date;
};

export async function fetchStores() {
    return await trpc.store.all.query();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let stores = await fetchStores();

    let baseUrl: string = process.env.VERCEL_URL
        ? 'https://edgarguzman.co'
        : 'http://localhost:3000';
    
    let links: Link[] = [
        {
            url: baseUrl,
            lastModified: new Date()
        }
    ];

    stores.forEach(store => {
        links.push({
            url: `${baseUrl}/${store.slug}`,
            lastModified: new Date()
        });
    });

    return links;
}
