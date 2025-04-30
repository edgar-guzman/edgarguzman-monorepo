import { add } from '@edgarguzman/lib/math/add';
import type { Metadata, NextPage } from 'next';

export function metadata(): Metadata {
    return {
        title: {
            absolute: 'Edgar Guzman',
        },
    };
}

const Home: NextPage = async () => {
    return (
<<<<<<< HEAD
        <main>
            <hgroup>
                <h1>Backend - Admin / Private</h1>

                <p>{add(1, 2)}</p>
            </hgroup>
=======
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4 px-4 py-16">
                <h1 className="text-2xl font-semibold tracking-tight sm:text-[5rem]">
                    Backend - Admin / Private
                </h1>
            </div>
>>>>>>> main
        </main>
    );
};

export default Home;
