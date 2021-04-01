module.exports = {
	purge: ["./src/components/**/*.tsx", "./pages/**/*.tsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		minHeight: {
			"60vh": "60vh",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
	plugins: [],
};
