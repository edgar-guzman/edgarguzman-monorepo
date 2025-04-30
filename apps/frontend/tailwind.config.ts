<<<<<<< HEAD
// tailwind config is required for editor support
import { tailwindCSSConfig } from '@edgarguzman/tailwind';
import type { Config } from 'tailwindcss';

const tailwindConfig: Pick<Config, 'content' | 'presets'> = {
    content: ['./src/**/*.{ts,tsx}'],
    presets: [tailwindCSSConfig],
};

export default tailwindConfig;
=======
import { tailwindConfig } from "@edgarguzman/tailwind";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
    content: ["./src/app/**/*.tsx"],
    presets: [tailwindConfig],
};

export default config;
>>>>>>> main
