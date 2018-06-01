define([
    'third-party-one',
    'lodash/toLower',
    '../components/common.component'
], function(tpo, toLower) {

    tpo.AwesomeFunc();

    return toLower('Hello from App Number Three!');
});