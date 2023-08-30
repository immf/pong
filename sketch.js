var raqueteesquerda;
var raquetedireita;
var bola;
var pontuacao1=0;
var pontuacao2=0; 
var parede1;
var parede2;
var estadojogo = "início";
var vitoria;
var derrota;
var toque;
var ponto;
function preload(){
   vitoria = loadSound('assets/WinBandoneon.wav');
   derrota = loadSound('assets/mixkit-horror-lose-2028.wav');
  ponto = loadSound('assets/winning-a-coin.wav');
   toque = loadSound('assets/game-ball-tap.wav');
}
function setup(){
createCanvas(400,400);    
raqueteesquerda = new Sprite(35,200,23,60);//eixo x, eixo y, largura, altura.
raqueteesquerda.color = "blue";
raquetedireita = new Sprite(365,200,23,60);
raquetedireita.color = "red";
bola = new Sprite(200,200,20,20);
bola.color = "black";
raqueteesquerda.collider = "k";
  raquetedireita.collider = "k";
  bola.bounciness = 1;
parede1 = new Sprite(200,400,400,1);
parede1.collider = "s";
parede2 = new Sprite(200,0,400,1);
parede2.collider = "s";
bola.rotationLock = true;
}


function draw(){
  background("#1ef79c"); 
  textSize(20);
  fill("black");
  text("Pontuação:"+pontuacao1,40,20);
  textSize(20);
  fill("black");
  text("Pontuação:"+pontuacao2,250,20);
  if(estadojogo == "início"){
    textSize(20);
  fill("black");
  text("Bem vindo,",150,160);
  textSize(20);
  fill("black");
  text("pressione espaço para sacar",75,240);
  }
  
  //x inicial, y inicial, x final, y final.
  line(200,0,200,10);
  line(200,20,200,30);
  line(200,40,200,50);
  line(200,60,200,70);
  line(200,80,200,90);
  line(200,100,200,110);
  line(200,120,200,130);
  line(200,140,200,150);
  line(200,160,200,170);
  line(200,180,200,190);
  line(200,200,200,210);
  line(200,220,200,230);
  line(200,240,200,250);
  line(200,260,200,270);
  line(200,280,200,290);
  line(200,300,200,310);
  line(200,320,200,330);
  line(200,340,200,350);
  line(200,360,200,370);
  line(200,380,200,390);
  //outra forma de fazer as linhas:
  //for(var i = 0;i<400;i = i+20){
   // line(200,i,200,10+i)
  //}
 
  
  if(kb.presses("space") && estadojogo == "início" ){
  bola.vel.y=2;
   bola.vel.x=3;
   estadojogo = "jogar";
  }
  if(estadojogo == "jogar"){
    if(mouse.y>30 && mouse.y<370){
      raquetedireita.y = mouse.y;  
      }
      
      if(raqueteesquerda.y<30){
        raqueteesquerda.y = 150;
      }
      var x=(Math.random()*41)+39;
      raqueteesquerda.y = bola.y-x;
      
    if(bola.colliding(raquetedireita) ) {
      toque.play();
      bola.vel.y=-2
      bola.vel.x=-3  
    }
      if(bola.colliding(raqueteesquerda) ){
        toque.play();
        bola.vel.y=-2
        bola.vel.x=3 
      }
      if(bola.colliding(parede1)){
        bola.vel.y=-2
        bola.vel.x=-3
      }
    }
   if(bola.x>400){
    ponto.play();
    pontuacao1 = pontuacao1+1;
    bola.x=200;
    bola.y=200;
    raqueteesquerda.x=35;
    raqueteesquerda.y=200;
    raquetedireita.x=365;
    raquetedireita.y=200;
    bola.vel.x=0;
     bola.vel.y=0;
     estadojogo="início";
   }   
   if(bola.x<0){
    ponto.play();
    pontuacao2 = pontuacao2+1;
    bola.x=200;
    bola.y=200;
    raqueteesquerda.x=35;
    raqueteesquerda.y=200;
    raquetedireita.x=365;
    raquetedireita.y=200;
    bola.vel.x=0;
     bola.vel.y=0;
     estadojogo="início";
   }   
   if(pontuacao1==10){
  derrota.play();
  ponto.stop();
    estadojogo="fim";
    fill("red");
    textSize(43);
    text("Game Over",90,185);
    textSize(30);
    text("Aperte 'R' para reiniciar",60,240)
   }  
    
    if(pontuacao2==10){ 
      vitoria.play(); 
      ponto.stop(); 
    estadojogo="fim";
    fill("green");
    textSize(43);
    text("Parabéns",100,185); 
    textSize(30);
    text("Aperte 'R' para reiniciar",60,240);
    
    }
    
    if(kb.presses("r") && estadojogo=="fim"){
      estadojogo="início";
      pontuacao1=0;
      pontuacao2=0;
      vitoria.stop();
      derrota.stop();
    }
     
  
} 