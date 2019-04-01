window.onload = function(){
    var canv = document.createElement('canvas'); // creates new canvas element
    canv.id = 'canvas'; // gives canvas id
    document.body.appendChild(canv); // adds the canvas to the body element

    var canvas = document.getElementById('canvas'); //find new canvas we created
    var context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;

    context.fillStyle = "rgba(0,0,0,0.3)";
    context.fillRect(0,0,600,400);

    x1 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    x2 = 600 - x1;
    x3 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    x4 = 600 - x3;
    y = Math.floor(Math.random() * (210 - 100 + 1)) + 100;
    y2= 400 - y;
    
    var imageObj = new Image();
    imageObj.src = 'https://source.unsplash.com/collection/123/'+x1+'x'+y;

    var imageObj2 = new Image();
    imageObj2.src = 'https://source.unsplash.com/collection/145/'+x2+'x'+y;

    var imageObj3 = new Image();
    imageObj3.src = 'https://source.unsplash.com/collection/112/'+x3+'x'+y2;

    var imageObj4 = new Image();
    imageObj4.src = 'https://source.unsplash.com/collection/136/'+x4+'x'+y2;

    imageObj.onload = function(){
        context.drawImage(imageObj,0,0);
        imageObj2.onload = function(){
            context.drawImage(imageObj2,x1,0);
            imageObj3.onload = function(){
                context.drawImage(imageObj3,0,y);
                imageObj4.onload = function(){
                    context.drawImage(imageObj4,x3,y);
                };
            };
        };
    };


    
};

