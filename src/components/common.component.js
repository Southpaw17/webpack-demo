
angular.module('common.component', [])
.service('CommonService', function() {
    var thing = clone({});
    console.log("I'm a common service!!");
});

define(function(require) {


    return 'Hello from a Common Component!';
})