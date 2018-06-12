import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const plugins = [
  babel({
    babelrc: false,
    presets: ['es2015-rollup'],
    plugins: [['transform-react-jsx', { pragma: 'h' }]]
  }),
  resolve({
    jsnext: true
  }),
  serve({
    contentBase: './dist/',
    port: 8080,
    open: true
  }),
  livereload()
];

let config = {
  input: './src/app.js',
  output: {
    name: 'app',
    file: './dist/app.js',
    format: 'umd',
    sourcemap: true
  },
  plugins: plugins
};

export default config;
