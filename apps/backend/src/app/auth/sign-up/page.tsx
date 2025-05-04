import type { Metadata, NextPage } from 'next';

export function metadata(): Metadata {
    return {
        title: 'Sign Up',
    };
}

const SignUp: NextPage = () => {
    return (
        <main>
            <div>
                <h1>Sign Up</h1>
            </div>
        </main>
    );
};

export default SignUp;
