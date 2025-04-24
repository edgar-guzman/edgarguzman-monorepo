import { add } from '@edgarguzman/lib/math/add';
import { Button } from '@edgarguzman/ui/button';
import type { Metadata, NextPage } from 'next';

import { ToastNotification } from '@/components/toast-notification';

export function metadata(): Metadata {
    return {
        title: {
            absolute: 'Edgar Guzman',
        },
    };
}

const Home: NextPage = () => {
    return (
        <main>
            <div>
                <h1>Backend - Admin / Private</h1>

                <p>{add(1, 2)}</p>

                <ToastNotification />

                <Button>Howdy Button</Button>
            </div>
        </main>
    );
};

export default Home;
