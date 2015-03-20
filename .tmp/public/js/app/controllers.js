angular.module('app.controllers', ['app.services'])
.controller('NavCtrl', function($scope, $rootScope, User) {
	$scope.isLoggedIn = User.isLoggedIn();
	$scope.user = User.getInfo();
	$rootScope.$on('LOGIN_EVENT', function() {
		$scope.isLoggedIn = User.isLoggedIn();
		$scope.user = User.getInfo();
		console.log('LOGIN HAPPENED');
		console.log($scope.isLoggedIn);
	});
});