import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('react-component', {
        description: 'Adds a new react component',
        prompts: [
            {
                name: 'title',
                type: 'input',
                message: 'What is the title of the component?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{ kebabCase title }}.tsx',
                templateFile: 'templates/component.hbs'
            }
        ]
    });
}
