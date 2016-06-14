forcaApp.controller('BackgroundController', ['$scope', function($scope) {

	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	var imageObj = new Image();
	var startScene = 1;

	$scope.desenha = function(){
		canvas = document.getElementById('myCanvas')
	    ctx = canvas.getContext('2d');
	    canvas.width = $('#background').width();
	    canvas.height = $('#background').height();
	    fill_scenes(canvas, images,begin,startScene);
	};
	$scope.desenha();

	$scope.$on('chamaErroLetra', function(event, args) {		
		imageObj.src = 'scenes/1/' + startScene + '.png';
		startScene = startScene + 1;
	});

}]);