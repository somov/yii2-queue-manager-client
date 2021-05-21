// default is: > 0.5%, last 2 versions, Firefox ESR, not dead
// we add on ie 11 since we still support that.
// see https://github.com/browserslist/browserslist for more info

//import banner from './banner.cjs';


const browsersList = ['defaults', 'ie 11'];





module.exports = (ctx) => ({
  //map: ctx.env === 'development',

  plugins: [
    require('autoprefixer')(browsersList),
    require('postcss-header')({
    header:  require('./banner.cjs')
    })
  ]
});

