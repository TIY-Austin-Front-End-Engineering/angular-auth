angular.module('app', ['app.controllers', 'app.services'])
.run(function($http, User) {
	$http.get('/auth/user')
	.success(function(user) {
		User.setLoggedInUser(user);
	})
	.error(function(err) {
		console.log(err);
	});
})
// .config(function());