import type { Metadata, NextPage } from 'next';

export function metadata(): Metadata {
    return {
        title: 'Sign In'
    }
}

const SignIn: NextPage = () => {
    return (
        <main>
            <div>
                <h1>Sign In</h1>
            </div>
        </main>
    )
}

export default SignIn;
