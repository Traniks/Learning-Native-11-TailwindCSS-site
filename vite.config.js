import { defineConfig } from 'vite'
import path from 'path'
import mpaPluginModule from 'vite-plugin-mpa'
const mpaPlugin = mpaPluginModule.mpa || mpaPluginModule.default || mpaPluginModule

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		mpaPlugin({
			scanFile: 'index.{js,ts,jsx,tsx}',
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: 'assets/js/[name].[hash].js',
				chunkFileNames: 'assets/js/[name].[hash].js',
				assetFileNames: ({ name }) => {
					if (/\.(css)$/.test(name ?? '')) {
						return 'assets/css/[name].[hash][extname]'
					}
					if (/\.(png|jpe?g|svg|gif|webp)$/.test(name ?? '')) {
						return 'assets/img/[name].[hash][extname]'
					}
					if (/\.(woff2?|eot|ttf|otf)$/i.test(name ?? '')) {
						return 'assets/fonts/[name]-[hash][extname]'
					}
					return 'assets/[name].[hash][extname]'
				},
			},
		},
		emptyOutDir: true,
	},
})
