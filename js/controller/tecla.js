
forcaApp.controller('TeclaController', ['$scope','Pontos', function($scope,Pontos) {
 
	$scope.letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Z','W','Y'];

	$scope.checaLetra = function(letra){
		if(Pontos.valor > 0 ){
			$scope.$emit('chamaEncontraPalavra',{'letra':letra});
		}
	}

	$scope.$on('removeTecla', function(event, args) {		
		$('#teclas .letra[letra='+ args.letra +']').hide('slow');
	});

}]);