/** @type {import("next").NextConfig} */
export const nextJsConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    transpilePackages: [
        "@edgarguzman/eslint",
        "@edgarguzman/next",
        "@edgarguzman/prettier",
        "@edgarguzman/tailwind",
        "@edgarguzman/typescript",
    ],
};
