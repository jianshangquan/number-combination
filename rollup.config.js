import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


const packageJson = require('./package.json')

export default {
    input: "./src/index.ts",
    output: [
        {
            file: './dist/esm/index.js',
            format: 'esm',
            sourcemap: true,
        },
        {
            file: './dist/cjs/index.js',
            format: 'cjs',
            sourcemap: true,
        }
    ],
    plugins: [
        typescript(),
        peerDepsExternal(),
    ]
}