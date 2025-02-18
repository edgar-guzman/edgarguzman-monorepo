import { tailwindConfig } from "@edgarguzman/tailwind";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
    content: ["./src/app/**/*.tsx"],
    presets: [tailwindConfig],
};

export default config;
