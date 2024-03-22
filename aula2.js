var x, y, xw, xh, sx, sy, sw, sh; // coord rect
var xa, xb, xr;  // coord elipse
var mxa, mxb; // movimento
var ww, wh; // altura e largura da janela
var z = 0 // 

function setup() {
  createCanvas(windowWidth, windowHeight);
	ww = windowWidth
	wh = windowHeight
	
  xa = ww/2 // x da elipse
  xb = 500 // y da elipse
	xr = 40 // largura da elipse
	
	mxa = 8 // movimento elipse X
	mxb = 8 // movimento elipse y
	
		sx = ww/3
sy = wh/3
sw = ww/3
sh = wh/3
		
}

function draw() {
  background(70, 130, 180);
  x = ww/2 - xr; // x do rect
  y = 524; // y do rect
  xw = 80; // width do rect
  xh = 20; // height do rect
	

  fill('#799BC5') 
	textAlign(CENTER)
  textSize(20);
  text('DRAG AND PLAY!', ww/2, 50);

  if(mouseIsPressed){
    x = mouseX;
	}
		if (x < 0){
	 x != mouseX;
		x = 0
}
	if (x > ww - 80){
	 x != mouseX;
		x = ww - 80
	}

  fill(255, 222, 173);
  rect(x, y, xw, xh); // retângulo móvel 


  ellipse(xa, xb, xr, xr) // elipse movimentando quando mouse é pressionado
  if (mouseIsPressed){
    xa = xa + mxa 
    xb = xb - mxb
  }
	

	else{

fill(150)
rect(sx, sy, sw, sh)
	   fill('#64D0D5');
textAlign(CENTER)
	   textSize(40);
text('START', windowWidth/2, windowHeight/2)	
	}
	
	if (mouseIsPressed){
		noCursor() // cursor do mouse invisível enquanto joga
  }
	else { cursor()}

  // se a coord x da elipse "encostar" na borda à direita ou da esquerda, inverte a movimentação no eixo X
  if (xa > ww - 20 || xa < 20){
    mxa = -mxa;
  }

  // se a coord y da elipse "encostar" no teto, inverte o movimento no eixo Y
  if (xb < 20)
    mxb = -mxb;

  // condição para quando a elipse encosta no retângulo, considera a coordenada variável de ambas, tanto largura quanto altura
 if (xa + xr/2 >= x && xa - xr/2 <= x + xw && xb + xr/2 >= y && xb - xr/2 <= y + xh) {
    mxb = -mxb;
  }

  //se a elipse ultrapassar a coordenada 600 do eixo Y (chão), faz aparecer o texto
  if (xb > wh){
    fill('#D57F64');
		textAlign(CENTER)
    textSize(40);
    text('TRY AGAIN!', windowWidth/2, windowHeight/2);
	
	
		
		
  }	

}