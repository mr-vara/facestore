var app = angular.module('facestore', []);
app.controller('MainCtrl', function($scope, $http) {

	//Metadata Object(for holding important properties)
	$scope.meta = {
		currentPage : 1,
		sortBy : "size",
		loading : true	
	};

	//Get data from given url
	$scope.getData = function(url){		
		$scope.meta.loading = true;
	    $http.get(url).then(function(response) {
	        $scope.data = response.data;
			$scope.meta.loading = false;            
	    });
	};

	//Load initial data
	$scope.getData("/api/products?page="+$scope.meta.currentPage+"&sortBy="+$scope.meta.sortBy);

	//Load the data based on sortBy parameter
	$scope.getSortedBy = function(sortBy){
		if($scope.meta.sortBy !== sortBy)
			$scope.meta.sortBy = sortBy;
		else
			return
		$scope.getData("/api/products?page="+$scope.meta.currentPage+"&sortBy="+$scope.meta.sortBy);
	};

	//Load previous page
	$scope.getPrevPage = function(){
		if($scope.meta.currentPage>1)	
			$scope.meta.currentPage--;
		else
			return
		$scope.getData("/api/products?page="+$scope.meta.currentPage+"&sortBy="+$scope.meta.sortBy);
	};

	//Load next page
	$scope.getNextPage = function(){	
		if($scope.meta.currentPage<10)
			$scope.meta.currentPage++;
		else
			return
		$scope.getData("/api/products?page="+$scope.meta.currentPage+"&sortBy="+$scope.meta.sortBy);
	};

	//Format date like x days ago
	$scope.formatDate = function(date){
		var datePosted = new Date(date);
		var dateNow = new Date();
		var timeDiff = Math.abs(dateNow.getTime() - datePosted.getTime());
		var dateDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
		if(dateDiff > 7)
			return date;
		else
			return dateDiff+" days ago";
	};

	//Convert cents into Dollers
	$scope.formatPrice = function(price){
		return (price/100);
	};

});