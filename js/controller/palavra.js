forcaApp.controller('PalavraController', ['$scope', function($scope) {
 
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
		}
		
	});

}]);