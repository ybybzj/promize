/*! Native Promise Only
    v0.7.8-a (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
/*jshint validthis:true */
"use strict";
var nativePromise = require('./lib/node');
if (typeof nativePromise != null) {
  module.exports = nativePromise;
} else {
  module.exports = require('./lib/shim');
}

// //test
// if(require.main === module){
//   console.log(nativePromise);
//   // console.log(Promise);
// }