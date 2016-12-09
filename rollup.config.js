import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  entry : `src/components/${process.env.entry}/index.js`,
  dest : `lib/${process.env.entry}.js`,
  format : 'umd',
  external: [
    'preact', 'preact-render-to-string'
  ],
  globals: {
    preact: 'Preact', renderString: 'preact-render-to-string'
    },
  moduleName: `${process.env.entry}`,
  plugins : [
    nodeResolve({
      jsnext: true
    }),
    babel({
      babelrc: false,
      sourceMap: false,
      exclude: 'node_modules/**',
      presets: [
        'es2015-rollup', 'stage-0'
      ],
      plugins: [
        [
          'transform-react-jsx', {
            pragma: 'h'
          }
        ]
      ]
    }),

    commonjs({
      exclude: [
        'node_modules/**',
      ],
      extensions: [
        '.js'
      ],
      ignoreGlobal: false,
      sourceMap: false,
    })

  ]
};