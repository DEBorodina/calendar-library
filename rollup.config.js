const typescript = require('@rollup/plugin-typescript');
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup');
const terser = require('@rollup/plugin-terser');
const dts = require('rollup-plugin-dts');
const packageJson = require('./package.json');
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const externals = require('rollup-plugin-node-externals');
const replacement = require('rollup-plugin-module-replacement');
const resolve = require('rollup-plugin-node-resolve');
const path = require('path');

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss'],
});
const projectRootDir = path.resolve(__dirname);

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'cjs',
      },
      {
        file: packageJson.main,
        format: 'esm',
      },
    ],
    external: ['react'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx'],
      }),
      externals({ deps: true }),
      url(),
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      [
        babel({
          babelHelpers: 'runtime',
          exclude: '**/node_modules/**',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
      ],
      svgr({ icon: true }),
      terser(),
      replacement(
        {
          entries: [
            {
              find: '@',
              replacement: path.resolve(projectRootDir, 'src'),
            },
          ],
        },
        customResolver
      ),
      resolve(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts.default()],
  },
];
