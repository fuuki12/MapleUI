import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess(), sveltePreprocess({ typescript: true })],

	kit: {
		adapter: adapter()
	}
};
