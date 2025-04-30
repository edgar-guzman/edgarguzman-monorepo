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

<<<<<<< HEAD
const Home: NextPage = () => {
    return (
=======
<<<<<<< HEAD
const Home: NextPage = () => (
=======
const Home: NextPage = async () => {
    return (
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
        <main>
            <div>
                <h1>Frontend - Web / Public</h1>

                <p>{subtract(1, 2)}</p>
<<<<<<< HEAD

                <QuantitySelector />

                <ToastNotification />

                <Button>Howdy Button</Button>
=======
<<<<<<< HEAD
>>>>>>> main
            </div>
=======
            </hgroup>
=======
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4 px-4 py-16">
                <h1 className="text-2xl font-semibold tracking-tight sm:text-[5rem]">
                    Frontend - Web / Public
                </h1>
            </div>
>>>>>>> main
>>>>>>> main
        </main>
    );
};

export default Home;
