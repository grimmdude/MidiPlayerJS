import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'cjs'
  },
  external: ['fs'],
  plugins: [
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      plugins: ['@babel/plugin-transform-destructuring']
    })
  ]
};