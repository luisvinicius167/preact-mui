import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  entry : `src/components/index.js`,
  dest : `lib/index.js`,
  format : 'umd',
  moduleName : `preactMui`,
  external: [
    'preact', 'preact-render-to-string'
  ],
  globals: {
    preact: 'Preact'
    },
  plugins : [
    nodeResolve({jsnext: true}),
    babel({
      babelrc: false,
      sourceMap: false,
      exclude: 'node_modules/**',
      presets: [
        'es2015-minimal-rollup', 'stage-0'
      ],
      plugins: [
        [
          'transform-react-jsx', {
            pragma: 'h'
          }
        ]
      ]
    }),

    commonjs({exclude: ['node_modules/**'], extensions: ['.js'], ignoreGlobal: false, sourceMap: false})

  ]
};