module.exports = {
	'env': {
		'es2021': true,
		'node': true
	},
	'ignorePatterns': ['migrations/*, seeders/*'],
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],

	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			0
		],
		'linebreak-style': [
			0
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
