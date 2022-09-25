/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		colors: {
			'blue': '#33A6BA',
			'light-blue': '#E8EDF3',
			'grey': '#989EA7',
			'light-grey': '#E8EDF3',
			'dark-blue': '#313E4F',
			'white': '#ffffff',
			'red': '#FF7B92',
		},

		extend: {
			fontSize: {
				'6xl': '64px',
			},
		},

		boxShadow: {
			'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
			'md': '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
			'lg': '0px 10px 15px -5px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',	
		}
	},
	plugins: [],
}
