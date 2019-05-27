function listService($http) {
	// make get request to json feed
	this.getList = () => {
		return $http.get('http://devtest.equisolve-dev.com');
	};
}

angular
	.module('app')
	.service('listService', listService);