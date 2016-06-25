forcaApp.controller('BackgroundController', ['$scope', function($scope) {

	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	var imageObj = new Image();
	$scope.begin = 10001;
	$scope.endScene = 10001;

	$scope.desenha = function(){
		canvas = document.getElementById('myCanvas')
	    ctx = canvas.getContext('2d');
	    canvas.width = $('#background').width();
	    canvas.height = $('#background').height();
	    fill_scenes(canvas, images, $scope.begin, $scope.endScene);
	};
	$scope.desenha();

	$scope.$on('desenha', function(event, args) {	
		$scope.begin = $scope.endScene;	
		imageObj.src = 'scenes/1/' + $scope.begin + '.png';
		$scope.endScene += 50;
		debugger;
		$scope.desenha();
	});

}]);