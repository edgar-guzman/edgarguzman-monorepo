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
        <main>
            <hgroup>
                <h1>Backend - Admin / Private</h1>

                <p>{add(1, 2)}</p>
            </hgroup>
        </main>
    );
};

export default Home;
