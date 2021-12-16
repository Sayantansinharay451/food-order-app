const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: false, // or 'media' or 'class'
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				orange: colors.orange,
				gray: colors.trueGray,
			},
			backgroundImage: {
				"meals-image": "url('/src/assets/meals.jpg')",
			},
			boxShadow: {
				lg: "0px 0px 50px 0px rgba(0, 0, 0, 0.8)",
				"orange-sm": "0px 0px 8px 0px rgba(255, 165, 0, 0.9)",
				"red-sm": "0px 0px 8px 0px rgba(255, 0, 0, 0.8)",
			},
		},
	},
	variants: {
		extend: {},
		scrollbar: ["rounded"],
	},
	plugins: [require("tailwind-scrollbar")],
};
