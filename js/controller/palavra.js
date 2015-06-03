forcaApp.controller('PalavraController', ['$scope', function($scope) {
 
	var chars = "PALAVRA".split('');
	console.log(chars);
	$scope.palavra_secreta = chars;

	$scope.$on('tentarLetra', function(event, args) {
		console.log('entrou em tentarLetrar');
	});

}]);