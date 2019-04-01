window.onload = function(){
    var canv = document.createElement('canvas'); // creates new canvas element
    canv.id = 'canvas'; // gives canvas id
    document.body.appendChild(canv); // adds the canvas to the body element

    var canvas = document.getElementById('canvas'); //find new canvas we created
    var context = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;

    var imageObj = new Image();
    imageObj.src = 'https://source.unsplash.com/collection/1127160/300x200';
    
    var i;
    var j;
    imageObj.onload = function(){
        for (i = 0; i < 2; i++){
            for (j = 0; j < 2; j++){
                context.drawImage(imageObj,j*300,i*200);
      }
    }
    context.font = "30pt Lora";
    context.fillText("My TEXT!", 50, 75);
     };    
};

