var app = angular.module('fbAnalyzer');

app.component('operationsComponent', {
   templateUrl: 'js/operations/operations.html',
   controller: ['$scope', function($scope) {
      var vm = this;

      vm.$onInit = function() {
         vm.name = 'Operations';
         vm.description = 'The only function for now is deleting on zero like friends.';
      };

      vm.onDeleteLowLikeFriends = function() {
         console.log('This function is coming soon.');
      };
   }]
});
