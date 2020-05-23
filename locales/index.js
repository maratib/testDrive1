module.exports = {
	locales: [
		{ code: 'en', iso: 'en-US', name: 'English', file: 'en-US.js' },
		{ code: 'de', iso: 'de-DE', name: 'Dutch', file: 'de-DE.js' },
		{ code: 'fr', iso: 'fr-FR', name: 'French', file: 'fr-FR.js' }
	],
	defaultLocale: 'en',
	seo: true,
	lazy: true,
	detectBrowserLanguage: {
		cookieKey: 'redirected',
		useCookie: true
	},
	langDir: 'locales/',
	parsePages: false,
	pages: {},
	vueI18n: {
		fallbackLocale: 'en',
		silentFallbackWarn: true,
		silentTranslationWarn: true,
	}
}