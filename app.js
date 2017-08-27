var bootstrap = require('bootstrap');


var app = angular.module('iBus', []);

app.controller('MainCtrl', [function() {
    angular.element(document).ready(function () {
        var bsInstance = new bootstrap();
        bootstrap.init();
    });
}]);
