import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  dest: 'prettier.bundle.js',
  format: 'cjs',
  plugins: [
    json({
      include: '**',
    }),

    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),

    commonjs(),

    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
