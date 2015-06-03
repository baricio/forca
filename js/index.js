var forcaApp = angular.module('forcaApp',[]);

forcaApp.run(function($rootScope) {
  
    $rootScope.$on('chamaEncontraPalavra', function(event, args) {
        $rootScope.$broadcast('encontraPalavra', args);
    });
    
});