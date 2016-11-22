/// <reference path="partial-home.html" />  
/// <reference path="partial-home-list.html" />
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        // Home States and Nested views------index.html#/home/paragraph
    .state('home', {
        url: '/home',
        templateUrl: 'views/partial-home.html'
    })

    .state('home.list', {
        url: '/list',
        templateUrl: 'views/partial-home-list.html',
        controller: function ($scope) {
            $scope.names = ['prasad', 'Rajiv', 'Harsha'];

        }
    })
    // nested list  with just some  random string  data
    .state('home.paragraph', {
        url: '/paragraph',
        templateUrl: 'views/partial-home-paragraph.html',
        controller: function ($scope) {
            $scope.paragraph = ['I could sure use a drink right now.'];
        }
    })
    //About Page and Multiple named Views--------
    .state('about', {
        url: '/about',
        views: {
            '': { templateUrl: '../views/partial-about.html' },
            'columnOne@about': { template: 'Look im in 1st column!' },
            'columnTwo@about': {
                templateUrl: 'views/table-data.html',
                controller: 'myAppController'
            }
        }
    });
});
routerApp.controller('myAppController', function ($scope) {
    $scope.message = 'test';
    $scope.Froots = [
        {
            name: 'Mango',
            price: 150
        },
        {
            name: 'Grapes',
            price: 200
        },
        {
            name: 'Banana', price: 100
        }

    ];
});