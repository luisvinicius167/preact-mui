import babel from 'rollup-plugin-babel';
import preset from 'babel-preset-es2015-minimal-rollup';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry : 'src/components/index.js',
  dest : 'dist/preact-mui.min.js',
  format : 'iife',
  sourceMap : 'inline',
  plugins : [
    nodeResolve({
      // use "module" field for ES6 module if possible
      module: true, // Default: true
      browser: true, // Default: false
      jsnext: true // Default: false
    }),
    babel({
      exclude: 'node_modules/**',

      presets: ['es2015-minimal-rollup', 'stage-0']
    }),
    'transform-class-properties',
    [
      'transform-react-jsx', {
        pragma: 'h'
      }
    ]
  ].concat(preset.plugins)
};