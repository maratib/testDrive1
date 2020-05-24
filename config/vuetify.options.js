import colors from 'vuetify/es5/util/colors';

export default ({ app }) => ({

	// breakpoint: {},
	// icons: {},
	// lang: {},
	// rtl: true,
	treeShake: true,
	customVariables: ['~/assets/css/variables.scss'],
	theme: {
		dark: false,
		themes: {
			dark: {
				primary: colors.blue.darken2,
				accent: colors.grey.darken3,
				secondary: colors.amber.darken3,
				info: colors.teal.lighten1,
				warning: colors.amber.base,
				error: colors.deepOrange.accent4,
				success: colors.green.accent3,
			},
			light: {
				primary: "#4ac2e1",
				myblue: "#4ac2e1",

			}
		}
	}

});