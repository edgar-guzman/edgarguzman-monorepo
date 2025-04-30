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

<<<<<<< HEAD
const Home: NextPage = async () => {
    let stores = await prisma.store.findMany();

=======
<<<<<<< HEAD
const Home: NextPage = () => {
>>>>>>> main
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
                <h1>Backend - Admin / Private</h1>

                <p>{add(1, 2)}</p>
<<<<<<< HEAD

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
                    Backend - Admin / Private
                </h1>
            </div>
>>>>>>> main
>>>>>>> main
        </main>
    );
};

export default Home;
