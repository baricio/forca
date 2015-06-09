forcaApp.controller('PontoController', ['$scope','Pontos', function($scope,Pontos) {
 
	$scope.chances = Pontos.valor;

 	$scope.$on('diminuiTentativas', function(event, args) {		
 		Pontos.remove();
		$scope.chances = Pontos.valor;
	});

}]);