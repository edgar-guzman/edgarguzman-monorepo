import { subtract } from '@edgarguzman/lib/math/sub-tract';
import { Button } from '@edgarguzman/ui/button';
import type { Metadata, NextPage } from 'next';

import { QuantitySelector } from '@/components/quantity-selector';
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
                <h1>Frontend - Web / Public</h1>

                <p>{subtract(1, 2)}</p>

                <QuantitySelector />

                <ToastNotification />

                <Button>Howdy Button</Button>
            </div>
        </main>
    );
};

export default Home;
