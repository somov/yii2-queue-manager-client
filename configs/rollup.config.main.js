// Rollup.js development and production configurations

import {nodeResolve as resolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import {keys} from 'lodash'

const banner = require( './banner.cjs');

const dev = (process.env.NODE_ENV !== 'production');
const sourcemap = dev ? true : false,
    globals = {
        'global': 'window',
        'global/window': 'window',
        'global/document': 'document',
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

    // Main ES6 bundle
    {
        input: './src/js/manager.js',
        output: {
            file: './build/bundle_es'+outFileExtension,
            format: 'iife',
            sourcemap: sourcemap,
            name: 'QueueManager',
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

    // Main ESMA 2015 bundle
    {
        input: './src/js/manager.js',
        output: {
            file: './build/bundle'+outFileExtension,
            format: 'iife',
            sourcemap: sourcemap,
            name: 'manager',
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