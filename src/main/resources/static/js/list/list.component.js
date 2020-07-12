var app = angular.module('fbAnalyzer');

app.component('listComponent', {
   templateUrl: 'js/list/list.html',
   controller: ['$scope', function($scope) {
      var vm = this;

      vm.$onInit = function() {
         vm.name = 'List';
         vm.description = 'See the list of friends ranked by likes. Otherwise you can just delete the ones with zero likes.';
      };
   }]
});
