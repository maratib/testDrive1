module.exports = {
	apps: [
		{
			name: 'weddingoo.nuxt',
			port: 3000,
			cwd: './weddingoo.nuxt',
			script: './node_modules/nuxt-start/bin/nuxt-start.js'
		},
		{
			name: 'weddingoo.api',
			port: 3001,
			cwd: './weddingoo.api',
			script: 'node server.js'
		},
		{
			name: 'test1.softsons.com',
			port: 3002,
			cwd: './test1.softsons.com',
			script: './node_modules/nuxt-start/bin/nuxt-start.js'
		},
	]
};

