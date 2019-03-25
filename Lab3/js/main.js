var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var image = new Image();   

image.src = 'https://source.unsplash.com/collection/1127163/300x200';



image.onload = function() {
   ctx.drawImage(image, 0, 0, 300, 200);
};
