/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"poke-gray": "#D3D3D3",
				"poke-blue": "#D4D3F2",
				"poke-white": "#DEDEDE",
			}
		},
	},
	plugins: [],
}
