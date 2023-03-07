/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '0.5rem',
		},
		colors: {
			primary: {
				DEFAULT: '#46B455',
			},
			secondary: {
				DEFAULT: '#4D4D4D',
			},
			black: '#262626',
			white: '#fff',
			gray: {
				DEFAULT: '#F2F2F2',
			},
		},
		clipPath: {
			hero: 'polygon(100px 0, 100% 0, 100% 100%, 0 100%)',
		},
		extend: {
			fontFamily: {
				sans: ['Mulish', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				'10xl': [108, '120px'],
			},
		},
	},
	plugins: [require('tailwind-clip-path')],
};
