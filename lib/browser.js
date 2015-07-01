if(typeof Promise === 'function'){
  module.exports = Promise;
}else{
  module.exports = require('./shim');
}