var forcaApp = angular.module('forcaApp',[]);

forcaApp.run(function($rootScope) {
  
    $rootScope.$on('chamaEncontraPalavra', function(event, args) {
        $rootScope.$broadcast('encontraPalavra', args);
    });

    $rootScope.$on('chamaErroLetra', function(event, args) {
        $rootScope.$broadcast('diminuiTentativas', args);
        $rootScope.$broadcast('removeTecla', args);
        $rootScope.$broadcast('desenha', args);
    });
    
});

