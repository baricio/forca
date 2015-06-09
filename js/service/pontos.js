forcaApp.service('Pontos', function () {
    this.valor = 5;

	this.remove = function(){
		if(this.valor > 0){
			this.valor = this.valor - 1;
		}
	};
});