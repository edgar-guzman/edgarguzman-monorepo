import merge from 'lodash.merge';
import type { Metadata } from 'next';

type MetadataGenerator = Omit<Metadata, 'title' | 'description'> & {
    title: string;
    description?: string;
    image?: string;
}

export function createMetadata({
    title,
    description,
    image,
    ...properties
}: MetadataGenerator): Metadata {
    let applicationName: string = 'Edgar Guzman';

    let author: Metadata['authors'] = {
        name: 'Edgar Guzman Co, LLC',
        url: 'https://edgarguzman.co/',
    };

    let publisher: string = 'Edgar Guzman Co, LLC';

    let twitterHandle: string = '@vercel';

    let protocol: string = process.env.NODE_ENV === 'production' ? 'https' : 'http';

    let productionUrl: string | undefined = process.env.VERCEL_PROJECT_PRODUCTION_URL;

    let parsedTitle: string = `${title} : ${applicationName}`;

    let defaultMetadata: Metadata = {
        title: parsedTitle,
        description,
        applicationName,
        metadataBase: productionUrl
            ? new URL(`${protocol}://${productionUrl}`)
            : undefined,
        authors: [author],
        creator: author.name,
        formatDetection: {
            telephone: false,
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: parsedTitle,
        },
        openGraph: {
            title: parsedTitle,
            description,
            type: 'website',
            siteName: applicationName,
            locale: 'en_US',
        },
        publisher,
        twitter: {
            card: 'summary_large_image',
            creator: twitterHandle,
        },
    };

    let metadata: Metadata = merge(defaultMetadata, properties);

    if (image && metadata.openGraph)
        metadata.openGraph.images = [
            {
                url: image,
                alt: title,
                width: 1200,
                height: 630
            }
        ];

    return metadata;
}
