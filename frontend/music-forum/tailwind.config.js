/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
			container: {
				center: true,
				margin: '2rem',
			},
			colors: {
				violet: '#090414',
				coal: '#282828',
			},
		},
	},
	plugins: [],
};
