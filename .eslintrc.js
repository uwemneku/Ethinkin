module.exports = {
	root: true,
	extends: [
		'react-native-typescript',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	rules: {
		indent: 'off', //['error', 'tab'],
		curly: 'off',
		semi: ['error', 'never'],
		// 'import/extensions': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
}