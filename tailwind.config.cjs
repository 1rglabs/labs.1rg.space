const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
    // case studies (json files) use classes dynamically
	safelist: ["text-blue-600"],

	theme: {
		fontSize: {
			xs: ['12px', '18px'],
			sm: ['14px', '24px'],
			base: ['16px', '25px'],
			lg: ['20px', '30px'],
			xl: ['24px', '35px'],
			'2xl': ['30px', '40px'],
			'3xl': ['36px', 1],
			'4xl': ['40px', 1],
			'5xl': ['44px', 1],
			'6xl': ['65px', 1],
			'7xl': ['72px', 1],
			'8xl': ['88px', 1],
			'9xl': ['144px', 1],
			'10xl': ['192px', 1]

		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				darkseagreen: "#6CD881",
				mediumorchid: "#7A31FF"
			},
			spacing: {
				'18': '4.5rem',
			},
			gridTemplateColumns: {
				'13': 'repeat(13, minmax(0, 1fr))'
			}
		},

	},

	future: {
		hoverOnlyWhenSupported: true,
	},

	plugins: []
};

module.exports = config;
