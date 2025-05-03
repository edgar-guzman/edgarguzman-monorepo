import { eslintReactConfig } from "@edgarguzman/eslint/react";

/** @type {import("eslint").Linter.Config} */
export default [
	...eslintReactConfig,
	{
		rules: {
			// Eslint
			"prefer-const": "off",
			'arrow-body-style': ['error', 'always'],

			// React
			'react/prop-types': 'off',
			'react/no-unknown-property': 'off'
		},
	},
];
