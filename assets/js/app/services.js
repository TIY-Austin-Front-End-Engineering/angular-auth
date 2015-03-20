angular.module('app.services', [])
.service('User', function($rootScope) {
	var user = null;
	return {
		setLoggedInUser: function(u) {
			user = u;
			$rootScope.$emit('LOGIN_EVENT', u);
		},
		isLoggedIn: function() {
			console.log(user);
			if(user === null) {
				return false;
			}
			else {
				return true;
			}
		},
		getInfo: function() {
			return user;
		}
	};
});