import type { Metadata, NextPage } from 'next';

import { createMetadata } from '@/lib/create-seo-metadata';

export function metadata(): Metadata {
    return createMetadata({
        title: 'Settings'
    });
}

const Settings: NextPage = () => {
    return (
        <main>
            <div>
                <h1>Settings</h1>
            </div>
        </main>
    );
};

export default Settings;

