import babel from 'rollup-plugin-babel'
import nodeResolve from "rollup-plugin-node-resolve";

export default {
  output: {
    file: 'dist/vuex-turbolinks.js',
    format: 'umd'
  },
  plugins: [
    babel(),
    nodeResolve({ jsnext: true, main: true }),
  ]
}
