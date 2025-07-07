import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    let protocol: string = process.env.NODE_ENV === 'production' ? 'https' : 'http';

    let productionUrl: string | undefined = process.env.VERCEL_PROJECT_PRODUCTION_URL;

    let authentication: string[] = [
        'in',
        'up'
    ];

    return [
        {
            url: `${protocol}://${productionUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        ...authentication.map((type) => {
            return {
                url: `${protocol}://${productionUrl}/auth/sign-${type}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 1
            };
        })
    ];
}
