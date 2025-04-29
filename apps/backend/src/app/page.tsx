import { add } from '@edgarguzman/lib/math/add';
import { prisma } from '@edgarguzman/prisma';
import { Button } from '@edgarguzman/ui/button';
import type { Metadata, NextPage } from 'next';
import Link from 'next/link';

import { ToastNotification } from '@/components/toast-notification';

export function metadata(): Metadata {
    return {
        title: {
            absolute: 'Edgar Guzman',
        },
    };
}

const Home: NextPage = async () => {
    let stores = await prisma.store.findMany();

    return (
        <main>
            <div>
                <h1>Backend - Admin / Private</h1>

                <p>{add(1, 2)}</p>

                <ToastNotification />

                <div className='mb-4'>
                    {stores?.map((store, index) => {return (
                        <div key={index}>
                            <h2 className='font-semibold'>{store.title}</h2>
                            <Link className='hover:cursor-pointer cursor-default hover:underline hover:underline-offset-4 no-underline' href={`/${store.id}`} target='_blank'>
                            View Store
                            </Link>
                        </div>
                    )}) ?? 'No stores added yet'}
                </div>

                <Button>Howdy Button</Button>
            </div>
        </main>
    );
};

export default Home;
