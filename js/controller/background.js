forcaApp.controller('BackgroundController', ['$scope', function($scope) {

	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	var imageObj = new Image();
	var startScene = 1;

	imageObj.onload = function() {
    	context.drawImage(imageObj, 69, 50);
  	};

 	$scope.$on('desenha', function(event, args) {		
		imageObj.src = '/../../scenes/1/' + startScene + '.png';
		startScene = startScene + 1;
	});

}]);