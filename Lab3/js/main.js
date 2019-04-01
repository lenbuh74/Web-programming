window.onload = function(){
     var canvas = document.getElementById('canvas');
     var context = canvas.getContext("2d");
     var imageObj = new Image();
     imageObj.src = 'https://source.unsplash.com/collection/1127163/300x200'; 
     imageObj.onload = function(){
        for (var i=0;i<4;i++){
        for (var j=0;j<3;j++){
        context.drawImage(imageObj,j*300,i*200);
      }
    }
    context.font = "30pt Lora";
    context.fillText("My TEXT!", 50, 75);
     };    
};