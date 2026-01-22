const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const globals = require("globals");

module.exports = [
	js.configs.recommended,
	prettier,
	{
		files: ["**/*.js", "bin/cmake-js"],
		languageOptions: {
			ecmaVersion: 2023,
			sourceType: "commonjs",
			globals: {
				...globals.node,
				...globals.es2023,
			},
		},
		rules: {},
	},
	{
		files: ["tests/**/*.js"],
		languageOptions: {
			globals: {
				...globals.mocha,
			},
		},
	},
];
