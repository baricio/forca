angular.module('svGame',[])
.service('Animacao', function () {
    
    var ctx;
    var canvas = document.getElementById('myCanvas');
    var imageArr = [];
    var config = {first:10001,last:10299};
    var scenes = [
    	{start:10001,end:10035}, 
    	{start:10035,end:10080}, 
    	{start:10080,end:10155},
    	{start:10155,end:10190},
    	{start:10190,end:10299},
    ];

    this.loadBackGround = function(){
    	draw(config.first, config.first);
    }

    this.play = function(scene){
    	var start = scenes[scene].start;
    	var end = scenes[scene].end;
    	
		draw(start, end);
    }

    var draw = function(start, end){
    	drawInterval = setInterval(function(){
			ctx.clearRect(0,0,canvas.width, canvas.height);
	    	ctx.drawImage(imageArr[start - config.first], 0,0,canvas.width, canvas.height);
	    	if(start == end){
	        	clearInterval(drawInterval);
	    	}
	    	start++;
		},30);
    }

    var fill_scenes = function(count_img,end_image){

    	var scene = new Image();
        scene.addEventListener("load", function() {
            imageArr.push(scene);
            if(count_img < end_image){
                count_img++;
                fill_scenes(count_img,end_image)
            }
            
        }, false);
        scene.src = 'scenes/1/move/stick%20'+count_img+'.png';
    }

    var carregaImagens = function(){	
    	ctx = canvas.getContext('2d');
	    canvas.width = $('#background').width();
	    canvas.height = $('#background').height();
	    fill_scenes(config.first, config.last);
    };
    carregaImagens();

    

})
.service('Pontos', function () {
    this.valor = 5;
    var tentativa = 0;

	this.remove = function(){
		if(this.valor > 0){
			this.valor = this.valor - 1;
			tentativa++;
		}
	};

	this.getTentativa = function(){
		return  tentativa;
	}
	
});