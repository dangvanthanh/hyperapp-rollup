import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const plugins = [
	resolve({
		jsnext: true,
	}),
	terser(),
]

const config = {
	input: './src/app.js',
	output: {
		name: 'app',
		file: './public/app.js',
		format: 'umd',
		sourcemap: false,
	},
	plugins: plugins,
}

export default config