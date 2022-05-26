module.exports = {
	extends: [
		'airbnb-base',
	],
	env: {
		node: true,
		es2021: true,
	},
	plugins: [
		'@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	ignorePatterns: ['**/*.d.ts'],
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				ts: 'never',
			},
		],
	},
};
