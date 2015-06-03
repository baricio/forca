forcaApp.controller('PalavraController', ['$scope', function($scope) {
 
	var chars = "PALAVRA".split('');
	
	$scope.palavra_secreta = chars;

	$scope.$on('encontraPalavra', function(event, args) {
		var indices = []
		var key = '';

		for(i=0;i<chars.length;i++){
			if(chars[i] == args.letra){
				$($('#palavra .item')[i]).html(chars[i]);
			}
		}


		
	});

}]);