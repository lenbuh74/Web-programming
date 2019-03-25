var 
	canv = document.getElementById("canvas"),
	ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

ctx.fillRect(100, 100, 300, 200);
