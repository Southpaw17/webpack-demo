var tpo = require("third-party-one");

require("../components/common.component");
require('../components/mostly.common.component');

tpo.AwesomeFunc();

// This is the CommonJS style way that Webpack provides for handling Lazy Loading
// require.ensure() is a Webpack-specific concept, and is considered to be
// outdated by the community.  It's still better than the AMD-style that we typically
// use most of the time today since it is less easily confused with an eager require()
// require.ensure(['../components/mostly.common.component.js'], function(require) {
//     console.log('This is the success callback.  Calls to require() here will be included in the dynamic bundle');
// }, function(error) {
//     console.error('Something horrible happened, please file a defect and assign to Kyle', error);
// });



module.exports = 'Hello from App Number Two!'
