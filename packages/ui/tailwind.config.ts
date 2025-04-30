import { tailwindCSSConfig } from '@edgarguzman/tailwind';
import type { Config } from 'tailwindcss';

const tailwindConfig: Pick<Config, 'content' | 'presets'> = {
    content: ['./src/**/*.{ts,tsx}'],
    presets: [tailwindCSSConfig]
};

export default tailwindConfig;
