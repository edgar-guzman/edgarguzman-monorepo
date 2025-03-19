// we want each package to be responsible for it's own content.

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export const tailwindCSSConfig: Omit<Config, "content"> = {
    theme: {
        extend: {
            backgroundImage: {
                "glow-conic":
                    "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
