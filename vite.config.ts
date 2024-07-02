import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools'
import Icons from 'unplugin-icons/vite';


const config: UserConfig = {
	plugins: [imagetools(), sveltekit(),  Icons({ compiler: 'svelte', autoInstall: true })]
};

export default config;