define([
    'third-party-one',
    '../components/common.component'
], function(tpo) {

    tpo.AwesomeFunc();

    // This is the 'AMD-Style' way to handle lazy-loading.  Notice that this
    // depends on a global require statement.  You can fix this by refactoring
    // this file to match the style used in common.component, where require
    // gets injected at the top
    // require(['third-party-one'], function(tpo) {
    //     tpo.AwesomeFunc();
    // });

    return 'Hello from App Number Three!';
});