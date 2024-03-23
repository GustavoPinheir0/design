var x, y, xw, xh, sx, sy, sw, sh; // coord rect
var xa, xb, xr; // coord elipse
var mxa, mxb; // movimento
var ww, wh; // altura e largura da janela
var z = 0 // preciso desse mesmo?
var pontos = 0
var cora, corb;

function setup() {
	ww = windowWidth - 100
	wh = windowHeight - 100

	createCanvas(ww, wh);

	cora = color(255, 222, 173)
	corb = color(255)
	
	xa = ww / 2 // x da elipse
	xb = wh / 1.2 - 21 // y da elipse
	xr = 40 // largura da elipse

	mxa = 6 // movimento elipse X
	mxb = 6 // movimento elipse y

	sx = ww / 3 // coord do botão
	sy = wh / 3 // coord do botão
	sw = ww / 3 // coord do botão
	sh = wh / 6 // coord do botão

	x = ww / 2 - 45; // x do rect
	y = wh / 1.2; // y do rect
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
		x = mouseX - xw/2; // o eixo X da barrinha passa a seguir o mouse
	}
	if (x < 0) { //para a barrinha não atravessar a janela à esquerda
		x = 0
	}
	if (x > ww - 95) { //para a barrinha não atravessar a janela à direita
		x = ww - 95
	}
	
	fill (cora);
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
	mxb = abs(mxb) * 1.15;
	pontos = pontos + 1
	cora = corb
		
	} else { cora = color(255, 222, 173) }

	fill(50, 100);
	textAlign(LEFT)
	textStyle(BOLD);
	textSize(width * 0.01);
	text('gustavo pinheiro, ESDI, 2024', ww / 90, wh * 0.950)

		fill(50, 100);
	textAlign(LEFT)
	textSize(width * 0.05);
	text(+ pontos, ww / 90, wh / 20)
	
	
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
		text('SUA PONTUAÇÃO FOI: '+ pontos, ww / 2, wh / 2 - 40)
		
		
	fill(70, 130, 180)
		rect (0, 0, ww/15, wh/10)

	}

}
