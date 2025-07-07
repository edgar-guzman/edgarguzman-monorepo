import type { Config } from 'tailwindcss';

const tailwindConfig: Pick<Config, 'content'> = {
    content: ['./src/**/*.{ts,tsx}']
};

export default tailwindConfig;
