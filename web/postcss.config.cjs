module.exports = {
	/*plugins: {
		autoprefixer: {

		},
		tailwindcss: {
			config: require('tailwindcss')('./tailwind.config.cjs')
		}
	}*/
	plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.cjs')]
};
