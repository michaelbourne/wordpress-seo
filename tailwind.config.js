const preset = require( "@yoast/tailwindcss-preset" );

module.exports = {
	presets: [ preset ],
	content: [
		"./packages/ui-library/src/**/!(stories).js",
		"./packages/js/src/**/*.js",
		"./src/integrations/settings-integration.php",
	],
};
