// A shared ESLint configuration for the repository.

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import onlyWarn from "eslint-plugin-only-warn";
import turboPlugin from "eslint-plugin-turbo";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, "../../../.gitignore");

/** @type {import("eslint").Linter.Config} */
export const eslintConfig = [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            turbo: turboPlugin,
        },
        rules: {
            "turbo/no-undeclared-env-vars": "warn",
        },
    },
    {
        plugins: {
            onlyWarn,
        },
    },
    includeIgnoreFile(gitignorePath),
];
