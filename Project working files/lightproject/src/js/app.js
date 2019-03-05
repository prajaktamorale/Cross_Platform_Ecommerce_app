angular.module('LightProject', [
  'ngRoute',
  'mobile-angular-ui',
  'LightProject.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});