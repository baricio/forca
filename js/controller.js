angular.module('controllers',[])
.controller('BackgroundController', ['$scope','Animacao','Pontos',function($scope, Animacao, Pontos) {

	Animacao.loadBackGround();
	$scope.$on('desenha', function(event, args) {	
		var tentativa = Pontos.getTentativa();
		Animacao.play(tentativa - 1);
	});

}])
.controller('PalavraController', ['$scope', function($scope) {
 
 	var id_palavra = Math.floor(Math.random() * lista_palavras.length);
	var chars = lista_palavras[id_palavra].palavra.toUpperCase().split('');
	
	$scope.dica = lista_palavras[id_palavra].dica;
	$scope.palavra_secreta = chars;

	$scope.$on('encontraPalavra', function(event, args) {
		var indices = []
		var key = '';
		var achou = false;

		for(i=0;i<chars.length;i++){
			if(chars[i] == args.letra){
				$($('#palavra .item')[i]).html(chars[i]);
				achou = true
			}
		}

		if(!achou){
			$scope.$emit('chamaErroLetra',{'letra':args.letra});
			$scope.$emit('desenha',{'desenha':true});
		}
		
	});

}])
.controller('PontoController', ['$scope','Pontos', function($scope,Pontos) {
 
	$scope.chances = Pontos.valor;

 	$scope.$on('diminuiTentativas', function(event, args) {		
 		Pontos.remove();
		$scope.chances = Pontos.valor;
	});

}])
.controller('TeclaController', ['$scope','Pontos', function($scope,Pontos) {
 
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