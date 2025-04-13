import { subtract } from '@edgarguzman/lib/math/sub-tract';
import type { Metadata, NextPage } from 'next';

export function metadata(): Metadata {
    return {
        title: {
            absolute: 'Edgar Guzman',
        },
    };
}

const Home: NextPage = () => (
        <main>
            <div>
                <h1>Frontend - Web / Public</h1>

                <p>{subtract(1, 2)}</p>
            </div>
        </main>
    );

export default Home;
