import type { Metadata, NextPage } from 'next'

import { Heading } from '@/components/heading'

export function metadata(): Metadata {
    return {
        title: 'Settings'
    }
}

const UserSettings: NextPage = () => {
    return (
        <main>
            <div>
                <Heading title='Settings' description='Manage your account settings' />
            </div>
        </main>
    )
}

export default UserSettings;
