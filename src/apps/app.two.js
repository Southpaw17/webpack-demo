var tpo = require("third-party-one");
var toUpper = require('lodash/toUpper');

require("../components/common.component");
require('../components/mostly.common.component');

tpo.AwesomeFunc();

module.exports = toUpper('Hello from App Number Two!');
