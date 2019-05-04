window.onload = function(){
   
    
    function showImg () {

    var imageObj = new Image();
    imageObj.src = 'https://source.unsplash.com/collection/123/'+x1+'x'+y;
    imageObj.crossOrigin = 'anonymous';

    var imageObj2 = new Image();
    imageObj2.src = 'https://source.unsplash.com/collection/145/'+x2+'x'+y;
    imageObj2.crossOrigin = 'anonymous';

    var imageObj3 = new Image();
    imageObj3.src = 'https://source.unsplash.com/collection/112/'+x3+'x'+y2;
    imageObj3.crossOrigin = 'anonymous';

    var imageObj4 = new Image();
    imageObj4.src = 'https://source.unsplash.com/collection/136/'+x4+'x'+y2;
    imageObj4.crossOrigin = 'anonymous';

    imageObj.onload = function () {
    context.drawImage(imageObj,0,0);
    };
    imageObj2.onload = function () {
    	 context.drawImage(imageObj2,x1,0);
    };
    imageObj3.onload = function () {
        context.drawImage(imageObj3,0,y);
    };
    imageObj4.onload = function () {
        context.drawImage(imageObj4,x3,y);
    };
       
    }

   function showQuote(source) {

   	setTimeout( function(){
    xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status === 200) {
            data = xhr.responseText;
            context.fillStyle = "rgba(0, 0, 0, 0.3)";
            context.fillRect(0,0,600,400);
            context.fillStyle = 'white';
            context.textAlign = "center";
            context.font = '20px Room';
            var words = [];
            words = data.split(' ');
            console.log(words);
            console.log(words.length);
            var i;
            var sum = 0;
            var quote = '';
            var count = 0;
            for (i = 0; i < words.length; i++) {
                var a = sum + context.measureText(words[i]).width;
                console.log('eto a: ' + a);
                if ((sum <= 500) && ((sum + context.measureText(words[i]).width) <= 500)) {
                    sum += context.measureText(words[i]).width;
                    quote += words[i] + ' ';
                    console.log('qoute: ' + quote);
                }
                else 
                    {   
                        context.fillText(quote, 300, 170+count*30);
                        quote = '';
                        quote += words[i] + ' ';
                        count += 1; 
                        sum = context.measureText(words[i]).width;
                    }     
                };
            if (quote != '') {
                context.fillText(quote, 300, 170+count*30);
            }
            console.log(context.measureText(data).width);
            
        }
        else {
            var error = xhr.status + ': ' + xhr.statusText;
            console.log(error);
        }
    }
    xhr.open('GET', source, true);
    xhr.send(null);
  }, 3500 );
  };


    function saveCanvasAsImageFile(){
    	var imageData = canvas.toDataURL();
    	var image = new Image();
    	image.src = imageData;
    	var link = document.createElement("a");
    	link.setAttribute("href", image.src);
    	link.setAttribute("download", "collage_lab3");
    	link.click();
	}

 
    var canv = document.createElement('canvas'); // creates new canvas element
    canv.id = 'canvas'; // gives canvas id
    document.body.appendChild(canv); // adds the canvas to the body element
    canv.style.position = "relative";
    canv.onclick = function () {
        var dataURL = canv.toDataURL("image/png");
        var link = document.createElement("a");
        link.href = dataURL;
        link.download = "image-lab3.png";
        link.click();
    };

    var canvas = document.getElementById('canvas'); //find new canvas we created
    var context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;

    context.fillStyle = "rgba(0,0,0,0.3)";
    context.fillRect(0,0,600,400);

    x1 = Math.floor(Math.random() * (400 - 100)) + 100;
    x2 = 600 - x1;
    x3 = Math.floor(Math.random() * (400 - 100)) + 100;
    x4 = 600 - x3;
    y = Math.floor(Math.random() * (210 - 100)) + 100;
    y2= 400 - y;
    
    var URL = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=ru';   
    showImg();
    showQuote(URL);

	var br = document.createElement('br'); 
    document.body.appendChild(br);

    var btn_save = document.createElement('button');
    document.body.appendChild(btn_save);
    btn_save.innerHTML = 'Save picture';
    btn_save.color = 'yellow';
    btn_save.onclick = function () {
    	saveCanvasAsImageFile();
    }

    var btn_reload = document.createElement('button'); 
    document.body.appendChild(btn_reload);
    btn_reload.innerHTML = 'New picture';
    btn_reload.onclick = function () {
    	window.location.reload();
    }   

};


