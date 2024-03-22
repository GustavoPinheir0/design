var x, y, xw, xh, sx, sy, sw, sh; // coord rect
var xa, xb, xr; // coord elipse
var mxa, mxb; // movimento
var ww, wh; // altura e largura da janela
var z = 0 // preciso desse mesmo?


function setup() {
	ww = windowWidth - 100
	wh = windowHeight - 100

	createCanvas(ww, wh);


	xa = ww / 2 // x da elipse
	xb = 500 // y da elipse
	xr = 40 // largura da elipse

	mxa = 6 // movimento elipse X
	mxb = 6 // movimento elipse y

	sx = ww / 3 // coord do botão
	sy = wh / 3 // coord do botão
	sw = ww / 3 // coord do botão
	sh = wh / 6 // coord do botão

	x = ww / 2 - 45; // x do rect
	y = 524; // y do rect
	xw = 90; // width do rect
	xh = 20; // height do rect
}

function draw() {
	background(70, 130, 180);

	fill('#799BC5')
	textAlign(CENTER)
	textSize(width * 0.03);
	text('DRAG AND PLAY!', ww / 2, 50);

	if (mouseIsPressed) {
		x = mouseX; // o eixo X da barrinha passa a seguir o mouse
	}
	if (x < 0) { //para a barrinha não atravessar a janela à esquerda
		x = 0
	}
	if (x > ww - 80) { //para a barrinha não atravessar a janela à direita
		x = ww - 80
	}
	
	fill(255, 222, 173);
	rect(x, y, xw, xh, 8); // retângulo móvel 
	ellipse(xa, xb, xr, xr) // elipse move enquanto mouse está pressionado, ou seja, começa o jogo
	if (mouseIsPressed) {
		xa = xa + mxa
		xb = xb - mxb
	} else { //caso não esteja jogando (mouse unpressed) então mostra 'botão' de START

		fill(100)
		rect(sx + 2, sy + 2, sw, sh, 8) //sombra do 'botão' do START
		fill(119, 136, 153)
		rect(sx, sy, sw, sh, 8) // 'botão' do START 

		noStroke(0)
		fill('#64D0D5');
		textAlign(CENTER, CENTER)
		textSize(width * 0.05);
		text('START', sx + sw / 2, sy + sh / 2)
	}

	if (mouseIsPressed) {
		noCursor() // cursor do mouse invisível enquanto joga
	} else {
		cursor()
	}

	// se a coord x da elipse "encostar" na borda à direita ou da esquerda, inverte a movimentação no eixo X
	if (xa > ww - 20 || xa < 20) {
		mxa = -mxa;
	}

	// se a coord y da elipse "encostar" no teto, inverte o movimento no eixo Y
	if (xb < 20) {
		mxb = -mxb;
	}
	// condição para quando a elipse encosta no retângulo, considera a coordenada variável de ambas, tanto largura quanto altura
	if (xa + xr / 2 >= x && xa - xr / 2 <= x + xw && xb + xr / 2 >= y && xb - xr / 2 <= y + xh) {
		mxb = -mxb;
	}

	//se a elipse ultrapassar a coordenada 600 do eixo Y (chão), faz aparecer o texto
	if (xb > wh) {
		sx = ww / 4
		sw = ww / 2

		fill(100)
		rect(sx + 2, sy + 2, sw, sh, 8) //sombra do retângulo do TRY AGAIN
		fill(119, 136, 153)
		rect(sx, sy, sw, sh, 8) //retângulo do TRY AGAIN
		fill('#DAAE66');
		textAlign(CENTER)
		textSize(width * 0.03);
		text('FOI DE ARRASTA, REFRESH..', ww / 2, wh / 2 - 40)


	
	}


	var tx = ww / 90
	var ty = wh * 0.950
	var ts = 0.01

	fill(50, 100);
	textAlign(LEFT)
	textStyle(BOLD);
	textSize(width * ts);
	text('gustavo pinheiro, ESDI, 2024', tx, ty)



	// UMA BRINCADEIRA CASO A ELIPSE ENCOSTE EM MEU NOME..
	/*if (xa + xr / 2 >= tx && xa - xr / 2 <= tx + textWidth("gustavo pinheiro, ESDI, 2024") && xb + xr / 2 >= ty && xb - xr / 2 <= ty + ty) {

		mxb = -mxb;
		//DECIDINDO AINDA;
	}*/

}
