import preprocess from 'svelte-preprocess';

import netlifyAdapter from '@sveltejs/adapter-netlify';

import staticAdapter from '@sveltejs/adapter-static';

const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: staticAdapter()
	},

	vite: {
		ssr: {
			noExternal: Object.keys(pkg.dependencies || {})
		}
	}
};

export default config;
