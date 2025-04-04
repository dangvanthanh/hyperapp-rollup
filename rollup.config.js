import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const plugins = [
	resolve({
		jsnext: true,
	}),
	serve({
		contentBase: './public/',
		port: 8080,
		open: true,
	}),
	livereload(),
]

const config = {
	input: './src/app.js',
	output: {
		name: 'app',
		file: './public/app.js',
		format: 'umd',
		sourcemap: true,
	},
	plugins: plugins,
}

export default config
