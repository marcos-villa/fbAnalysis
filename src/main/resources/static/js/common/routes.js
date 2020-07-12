var app = angular.module('fbAnalyzer',['ui.router']);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.hashPrefix('');

   var homeState = {
      name: "homeState",
      url: '/',
      template: ''
   };

   var listState = {
      name: "listState",
      url: '/list',
      component: 'listComponent'
   };

   var operationsState = {
      name: "operationsState",
      url: '/operations',
      component: 'operationsComponent'
   };

   $stateProvider.state(homeState);
   $stateProvider.state(listState);
   $stateProvider.state(operationsState);
}]);
