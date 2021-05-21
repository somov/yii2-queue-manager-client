
//import fs from 'fs';
//import _ from 'lodash';
//import pkg from './../package.json';

const fs = require('fs');
const _ = require('lodash');
const pkg = require('./../package.json');

const compiledLicense = _.template(fs.readFileSync('./configs/license-header.txt', 'utf8'));
const bannerData = _.pick(pkg, ['version', 'copyright', 'name', 'author', 'license', 'homepage']);

module.exports =  compiledLicense(Object.assign({includesVtt: true}, bannerData));
