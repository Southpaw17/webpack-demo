
angular.module('common.component', [])
.service('CommonService', function() {
    var thing = clone({});
    console.log("I'm a common service!!");
});