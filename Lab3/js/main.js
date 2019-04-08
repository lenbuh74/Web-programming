window.onload = function(){
   
    function showImg (x1, x2, x3, x4, y, y2) {

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

    var a = document.createElement('a');
    a.id = 'link';
    a.innerHTML = 'Скачать картинку';
    document.body.appendChild(a);
    
    link.setAttribute('download', 'image.png');
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));  
    }
    

    function showQuote() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=text', true);
    text = xhr.responseText;
    context.fillText('eto test' + text, 50, 50);
    xhr.onload = function () {
        if (xhr.status !== 200) {
            var error = xhr.status + ': ' + xhr.sstatusText;
            context.fillText('eto error' + error, 100,200);
        } else {
            var quote = xhr.responseText;
            context.fillText('eto quote' + quote, 40, 100); 
            xhr.send(); 
            context.fillText('proverka', 100, 100);
        }
    }
    xhr.onerror = function() {
        var error2 = "Ошибка: " + this.src;
        context.fillText(error2, 40,100);
        };
     context.fillText('proverka vne onload', 100, 100);
   };


 
    var canv = document.createElement('canvas'); // creates new canvas element
    canv.id = 'canvas'; // gives canvas id
    document.body.appendChild(canv); // adds the canvas to the body element
    canv.style.position = "relative";

    var canvas = document.getElementById('canvas'); //find new canvas we created
    var context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;

    context.fillStyle = "rgba(0,0,0,0.3)";
    context.fillRect(0,0,600,400);

    x1 = Math.floor(Math.random() * (300 - 100)) + 100;
    x2 = 600 - x1;
    x3 = Math.floor(Math.random() * (300 - 100)) + 100;
    x4 = 600 - x3;
    y = Math.floor(Math.random() * (210 - 100)) + 100;
    y2= 400 - y;
    

    showImg(x1, x2, x3, x4, y, y2);
    showQuote();         
};


