import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/components/flexbox/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: ['css-layout', 'prop-types', 'react', 'react-dom'],
  plugins: [
    resolve(),
    babel({
      presets: ['react-app'],
      runtimeHelpers: true,
    }),
    terser(),
  ],
};
