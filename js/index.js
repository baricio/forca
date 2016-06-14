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

var images = [];
var count = 0;
var begin = 10001;
var end   = 10299;
var canvas;
var ctx;
var drawInterval;

$('document').ready(function(){
    /*canvas = document.getElementById('myCanvas')
    ctx = canvas.getContext('2d');
    canvas.width = $('#background').width();
    canvas.height = $('#background').height();
    fill_scenes(images,begin,end); */ 
})

function init(canvas) {
    drawInterval = setInterval(draw(canvas),30)
 }

function draw(canvas){
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(images[count], 0,0,canvas.width, canvas.height);
    count++;
    if(count == 299){
        clearInterval(drawInterval);
    }
}

  function fill_scenes(canvas, imageArr,count_img,end_image){

    var scene = new Image();
        scene.addEventListener("load", function() {
            imageArr.push(scene);
            if(count_img < end_image){
                count_img++;
                fill_scenes(imageArr,count_img,end_image)
            }else{
                debugger;
                init(canvas);
            }
            
        }, false);
        scene.src = 'scenes/1/move/stick%20'+count_img+'.png';
  }



  function base_url(){
    return window.location.protocol + '//' + window.location.hostname
}