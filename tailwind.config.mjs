/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'rubik': ['"Rubik Variable"', 'sans-serif']
			}
		},
		colors: {
			'plmagenta': 'hsl(293, 100%, 63%)',
			'plviolet': 'hsl(264, 100%, 61%)',
			'pwhite': 'hsl(0, 0%, 100%)',
			'plgviolet': 'hsl(270, 20%, 96%)',
			'pvddviolet': 'hsl(271, 36%, 24%)',
			'pvlmagenta': 'hsl(289, 100%, 72%)',
		}
	},
	plugins: [],
}
