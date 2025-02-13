import type { PlopTypes } from "@turbo/gen";
// import { execSync } from "node:child_process";

// interface PackageJson {
//   name: string;
//   scripts: Record<string, string>;
//   dependencies: Record<string, string>;
//   devDependencies: Record<string, string>;
// }

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator("init", {
        description: "Generate a new package",
        prompts: [],
        actions: [],
    });

    plop.setGenerator("file", {
        description: "Generate a new file for a existing package",
        prompts: [
            {
                type: "input",
                name: "title",
                message: "What is the title of the file?",
                validate(input: string) {
                    if (input.includes("."))
                        return "file name cannot include an extension";

                    if (input.includes(" "))
                        return "file name cannot include spaces";

                    if (!input) return "file name is required";

                    return true;
                },
            },
            {
                type: "list",
                name: "ext",
                message: "What type of file should be created?",
                choices: [".md", ".ts", ".tsx"],
            },
            {
                type: "input",
                name: "location",
                message:
                    "Where will this file be locate? (Only the package title: `prisma` prefix)",
            },
        ],
        actions: [
            {
                type: "add",
                path: "packages/{{ kebabCase location }}/{{ kebabCase title }}{{ ext }}",
                templateFile: "templates/file/turborepo-generators.hbs",
            },
        ],
    });
}
