var eCanvas;
var ctx;
var antes = new Date();
var agora = new Date();
var dt = 0;
var auxiliar = 0; //Variável qua auxilia no status do jogo
var mapa;
var imglib;
var soundlib;
var linhas = 17; //Fixa a quantidade de linhas
var colunas = 38; //Fixa a quantidade de colunas
var SIZE = 32; //Fixa a altura e largura de cada quadro
var casasMapa = ([
  [100, 100, 100, 5,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  6,  9,  9,  5,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 6, 100, 100, 100],
  [100, 100, 100, 1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 95,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 66,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 96,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 65,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 97,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 64,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 98,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 63,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 99,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 62,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 98,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 63,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 97,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 64,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 96,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 65,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 95,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 66,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 3, 100, 100, 100],
  [100, 100, 100, 1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  9,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 3, 100, 100, 100],
  [100, 100, 100, 8,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  7,  9,  9,  8,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 7, 100, 100, 100],
]);//Casas 100: Espaços em branco para inclusão de informações (Barra de energia e cards)./ Campos 1, 2, 3, 4, 5, 6, 7 e 8: campos com imagens de bordas / Campos 9: Campos com o riacho / Campos 79, 80, 81 e 82: compõe a ponte / Campos 0: Campos com o gramado // Campos de 62 a 99: Campos onde o personagem pode percorrer // Campos 94: Campos onde serão posicionada as torres pequenas de "a" / Campo 99: Campo onde será posicionada a torre principal de "a" / Campos 67: Campos onde serão posicionadas as pequenas torres de "b" / Campo 62: Campo onde será posicionada a torre principal de "b"


function init(){
    eCanvas = document.getElementsByTagName("canvas")[0];
    eCanvas.width = SIZE * colunas;//Largura de cada quadro vezes o número de colunas
    eCanvas.height = SIZE * linhas;//Altura de cada quadro vezes o número de linhas
    ctx  = eCanvas.getContext("2d");

    soundLib = new SoundLoader();

    imglib = new ImageLoader();
    imglib.load("chao", "img/chao.png");
    imglib.load("intervalo", "img/intervalo.png");
    imglib.load("0", "img/0.png");
    imglib.load("1", "img/1.png");
    imglib.load("2", "img/2.png");
    imglib.load("3", "img/3.png");
    imglib.load("3", "img/3.png");
    imglib.load("4", "img/4.png");
    imglib.load("5", "img/5.png");
    imglib.load("6", "img/6.png");
    imglib.load("7", "img/7.png");
    imglib.load("8", "img/8.png");
    imglib.load("ponte", "img/ponte.png");

    mapa = new Map(linhas, colunas);
    mapa.imageLib = imglib;
    mapa.loadMap(casasMapa);
    mapa.width = SIZE;
    mapa.height = SIZE;
    a = new Sprite();
    a.imageLib = imglib;
    a.energia = eCanvas.height;//Fixa a energia com o mesmo valor da altura para simplificar no desenho
    b = new Sprite();
    b.imageLib = imglib;
    b.energia = eCanvas.height;//Fixa a energia com o mesmo valor da altura para simplificar no desenho
    configuraControles();
    window.onmousedown = configuraMouse;
    var id = requestAnimationFrame(passo);
}

function passo(){
  	id = requestAnimationFrame(passo);
  	agora = new Date();
  	dt = (agora - antes) / 1000;
  	ctx.clearRect(0, 0, eCanvas.width, eCanvas.height);
    mapa.desenhar(ctx);
    if (a.energia < eCanvas.height){
      a.energia = a.energia + dt * 10;
    }
    if (b.energia < eCanvas.height){
      b.energia = b.energia + dt * 10;
    }
    informacoes();//Desenha informações complementares na tela (Barra de energia e cards)
    mapa.carregaBarra();//Adiciona cores na barra de acordo com a energia
  	antes = agora;
}

function configuraControles() {
  addEventListener("keydown", function(e) {
    switch (e.keyCode) {
      case 0:
        e.preventDefault();
        break;
      default:
    }
  });
  addEventListener("keyup", function(e) {
    switch (e.keyCode) {
      case 0:
        e.preventDefault();
        break;
      default:
    }
  });
}

function configuraMouse(e) {
  e = e || window.event;
  var button = e.which || e.button;
  if(button == 1) {
    console.log("Botão esquerdo");
  } else if(button == 2) {
    console.log("Botão de rolagem");
  } else if(button == 3) {
    console.log("Botão direito");
  }
};

function textoFormatado(texto1, texto2, texto3, texto4, texto5, texto6, texto7, texto8, texto9, texto10){
  ctx.textAlign="center";
  ctx.fillStyle = "red";
  ctx.font = "3em Arial Black";
  ctx.fillText(texto1, eCanvas.width / 2, eCanvas.height / 2-20);
  ctx.fillStyle = "white";
  ctx.font = "1em Arial Black";
  ctx.fillText(texto2, eCanvas.width / 2, eCanvas.height / 2);
  ctx.fillText(texto3, eCanvas.width / 2, eCanvas.height / 2 + 20);
  ctx.fillText(texto4, eCanvas.width / 2, eCanvas.height / 2 + 40);
  ctx.fillStyle = "white";
  ctx.font = "0.75em Arial Black";
  ctx.fillText(texto5, eCanvas.width / 2, eCanvas.height / 2 + 55);
  ctx.fillText(texto6, eCanvas.width / 2, eCanvas.height / 2 + 70);
  ctx.fillText(texto7, eCanvas.width / 2, eCanvas.height / 2 + 85);
  ctx.fillText(texto8, eCanvas.width / 2, eCanvas.height / 2 + 100);
  ctx.fillText(texto9, eCanvas.width / 2, eCanvas.height / 2 + 115);
  ctx.fillText(texto10, eCanvas.width / 2, eCanvas.height / 2 + 130);
}

function informacoes(){
  ctx.fillStyle = "#156c99";//Desenha um fundo azul por traz da barra de informações do "a"
  ctx.fillRect (0 * SIZE, eCanvas.height, SIZE * 3, - eCanvas.height);

  ctx.fillStyle = "hsl("+a.energia/eCanvas.height*120+",100%,50%)";//Desenha a barra de energia do "a"
  ctx.fillRect (2 * SIZE + 3, eCanvas.height, SIZE - 6, - a.energia);

  ctx.textAlign="left";//Adiciona texto "A" a barra do "a"
  ctx.fillStyle = "white";
  ctx.font = "4em Arial Black";
  ctx.fillText("A", 0 * SIZE + 8, 55);

  ctx.textAlign="center";//Adiciona texto "ENERGIA" a barra do "a"
  ctx.font = "2em Arial Black";
  ctx.fillText("E", 2 * SIZE + SIZE / 2, eCanvas.height / 2 - 90);
  ctx.fillText("N", 2 * SIZE + SIZE / 2, eCanvas.height / 2 - 60);
  ctx.fillText("E", 2 * SIZE + SIZE / 2, eCanvas.height / 2 - 30);
  ctx.fillText("R", 2 * SIZE + SIZE / 2, eCanvas.height / 2);
  ctx.fillText("G", 2 * SIZE + SIZE / 2, eCanvas.height / 2 + 30);
  ctx.fillText("I", 2 * SIZE + SIZE / 2, eCanvas.height / 2 + 60);
  ctx.fillText("A", 2 * SIZE + SIZE / 2, eCanvas.height / 2 + 90);

  ctx.fillStyle = "#156c99";//Desenha um fundo azul por traz da barra de energia do "b"
  ctx.fillRect (35 * SIZE, eCanvas.height, SIZE * 3, - eCanvas.height);

  ctx.fillStyle = "hsl("+b.energia/eCanvas.height*120+",100%,50%)";//Desenha a barra de energia do "a"
  ctx.fillRect (35 * SIZE + 3, eCanvas.height, SIZE - 6, - b.energia);

  ctx.textAlign="left";//Adiciona texto "A" a barra do "b"
  ctx.fillStyle = "black";
  ctx.font = "4em Arial Black";
  ctx.fillText("B", 36 * SIZE + 6, 55);

  ctx.textAlign="center";//Adiciona texto "ENERGIA" a barra do "b"
  ctx.font = "2em Arial Black";
  ctx.fillText("E", 35 * SIZE + SIZE / 2, eCanvas.height / 2 - 90);
  ctx.fillText("N", 35 * SIZE + SIZE / 2, eCanvas.height / 2 - 60);
  ctx.fillText("E", 35 * SIZE + SIZE / 2, eCanvas.height / 2 - 30);
  ctx.fillText("R", 35 * SIZE + SIZE / 2, eCanvas.height / 2);
  ctx.fillText("G", 35 * SIZE + SIZE / 2, eCanvas.height / 2 + 30);
  ctx.fillText("I", 35 * SIZE + SIZE / 2, eCanvas.height / 2 + 60);
  ctx.fillText("A", 35 * SIZE + SIZE / 2, eCanvas.height / 2 + 90);



  ctx.fillStyle = "white";//Desenha um fundo branco por traz do card 1 de "a"
  ctx.fillRect (0 * SIZE + 2, 2 * SIZE, SIZE * 2 - 1, SIZE * 2.9);

  ctx.fillStyle = "white";//Desenha um fundo branco por traz do card 1 de "a"
  ctx.fillRect (0 * SIZE + 2, 5 * SIZE, SIZE * 2 - 1, SIZE * 2.9);

  ctx.fillStyle = "white";//Desenha um fundo branco por traz do card 1 de "a"
  ctx.fillRect (0 * SIZE + 2, 8 * SIZE, SIZE * 2 - 1, SIZE * 2.9);

  ctx.fillStyle = "white";//Desenha um fundo branco por traz do card 1 de "a"
  ctx.fillRect (0 * SIZE + 2, 11 * SIZE, SIZE * 2 - 1, SIZE * 2.9);

  ctx.fillStyle = "white";//Desenha um fundo preto por traz do card 1 de "a"
  ctx.fillRect (0 * SIZE + 2, 14 * SIZE, SIZE * 2 - 1, SIZE * 2.9);

  ctx.fillStyle = "black";//Desenha um fundo preto por traz do card 1 de "b"
  ctx.fillRect (36 * SIZE - 1, 2 * SIZE, SIZE * 2 - 1, SIZE * 2.9);

  ctx.fillStyle = "black";//Desenha um fundo preto por traz do card 1 de "b"
  ctx.fillRect (36 * SIZE - 1, 5 * SIZE, SIZE * 2 - 1, SIZE * 2.9);

  ctx.fillStyle = "black";//Desenha um fundo preto por traz do card 1 de "b"
  ctx.fillRect (36 * SIZE - 1, 8 * SIZE, SIZE * 2 - 1, SIZE * 2.9);

  ctx.fillStyle = "black";//Desenha um fundo preto por traz do card 1 de "b"
  ctx.fillRect (36 * SIZE - 1, 11 * SIZE, SIZE * 2 - 1, SIZE * 2.9);

  ctx.fillStyle = "black";//Desenha um fundo preto por traz do card 1 de "b"
  ctx.fillRect (36 * SIZE - 1, 14 * SIZE, SIZE * 2 - 1, SIZE * 2.9);
}
