// Rollup.js development and production configurations
import fs from 'fs';
import {nodeResolve as resolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import _ from 'lodash';
import {keys} from 'lodash'
import pkg from './../package.json';

const compiledLicense = _.template(fs.readFileSync('./configs/license-header.txt', 'utf8'));
const bannerData = _.pick(pkg, ['version', 'copyright', 'name', 'author', 'license', 'homepage']);
const banner = compiledLicense(Object.assign({includesVtt: true}, bannerData));

const dev = (process.env.NODE_ENV !== 'production');
const sourcemap = dev ? 'inline' : false,
    globals = {
        'global': 'window',
        'global/window': 'window',
        'global/document': 'document',
        'global/jQuery': 'window.jQuery'
    },
    outFileExtension = dev ? '.js' : '.min.js';

console.log(`running in ${dev ? 'development' : 'production'} mode`);



const primedCjs = commonjs({
    sourceMap: false
});


/**
 *
 * @param {number} ecma
 * @return {*}
 * @private
 */
function _terser(ecma) {
    if (dev) {
        return null;
    }
    return terser({
        ecma: ecma,
        mangle: {toplevel: true},
        compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !dev,
            drop_debugger: !dev
        },
        output: {quote_style: 1}
    })
}


export default [
    {
        input: './src/js/jquery.plugin.js',
        output: {
            file: './build/jquery.bundle_es'+outFileExtension,
            format: 'iife',
            sourcemap: sourcemap,
            banner,
            plugins: [
                _terser(2018)
            ],
            globals: globals,
        },
        plugins: [
            resolve({
                browser: true,
                ignoreGlobal: false,
                include: ['node_modules/**'],
                skip: keys(globals),
            }),
            primedCjs,
            babel({
                runtimeHelpers: true,
                babelrc: false,
                compact: false,
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    "@babel/plugin-proposal-private-methods"
                ]
            })
        ],
        watch: {
            include: './src/js/**',
            clearScreen: false
        },
    },

    {
        input: './src/js/jquery.plugin.js',
        output: {
            file: './build/jquery.bundle'+outFileExtension,
            format: 'iife',
            sourcemap: sourcemap,
            banner,
            globals: globals,
            plugins: [
                _terser(2015)
            ]
        },

        plugins: [
            resolve({
                browser: true,
                ignoreGlobal: false,
                include: ['node_modules/**'],
                skip: keys(globals),
            }),
            primedCjs,
            babel({
                runtimeHelpers: true,
                babelrc: false,
                compact: false,
                presets: [
                    ['@babel/preset-env', {
                        bugfixes: true,
                        loose: true,
                        modules: false
                    }]
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-transform-object-assign',
                    ['@babel/plugin-transform-runtime', {regenerator: false}],
                    "@babel/plugin-proposal-private-methods"
                ]
            })
        ],
        watch: {
            include: './src/js/!**',
            clearScreen: false
        },
    },

]