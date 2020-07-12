var app = angular.module('fbAnalyzer');

app.component('homeComponent', {
   templateUrl: 'js/home/home.html',
   controller: ['$scope', function($scope) {
      var vm = this;

      vm.$onInit = function() {
         vm.description = 'This is a simple app that ranks friends by likes. You can also delete friends with zero likes automatically. Click either one below.';
      };
   }]
});
