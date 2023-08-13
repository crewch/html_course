import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
	],
	theme: {
		extend: {
			colors: {
				'ap-gray': '#777777',
				'ap-gray-dark': '#333333',
				'ap-black': '#000000',
				'ap-white': '#FAFAFA',
				'ap-brown-light': '#BA8554',
				'ap-brown-dark': '#A14F03',
				'ap-green-light': '#66D763',
				'ap-red-light': '#D76363',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			screens: { '3xl': '2000px' },
		},
	},
	plugins: [],
}
export default config
