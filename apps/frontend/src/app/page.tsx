import type { Metadata, NextPage } from "next";

export function metadata(): Metadata {
    return {
        title: {
            absolute: "Edgar Guzman",
        },
    };
}

const Home: NextPage = async () => {
    return (
        <main>
            <hgroup>
                <h1>Frontend - Web / Public</h1>
            </hgroup>
        </main>
    );
};

export default Home;
