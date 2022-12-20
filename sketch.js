var fundo
var imagemDoFundo
var Ghost
var GhostImage
var pontos=0
var varanda
var paredeDireita
var paredeEsquerda
var Jobson
var Porta
var batata
var GrupoDeVaranda
var BlocoInvisivel
var GrupoDeBlocos
var EstadoDeJogo="jogar"
var GrupoDePortasSelvagens
function preload(){
imagemDoFundo=loadImage("tower.png")
GhostImage=loadImage("ghost-standing.png")
Jobson=loadImage("climber.png")
batata=loadImage("door.png")
}

function setup(){
createCanvas(600,600);
fundo=createSprite(300,300);
fundo.addImage("batataComPudim",imagemDoFundo);
fundo.velocityY=+4
Ghost=createSprite(200,200,50,50);
Ghost.addImage("gaspar",GhostImage);
Ghost.scale=0.3;
paredeDireita=createSprite(590,0,10,1300)
paredeDireita.visible=false;
paredeEsquerda=createSprite(10,0,10,1300);
paredeEsquerda.visible=false;
GrupoDeVaranda=new Group();
GrupoDeBlocos=new Group();
GrupoDePortasSelvagens=new Group();
}

function draw(){
  drawSprites();
 if (EstadoDeJogo=="jogar"){
  if(fundo.y > height ){
    fundo.y = height/2;
  }
  if(keyDown("LEFT_ARROW")){
    Ghost.x=Ghost.x -5;
    
      }
      if(keyDown("RIGHT_ARROW")){
        Ghost.x=Ghost.x +5;
      }
    if(keyDown("UP_ARROW")){
      Ghost.velocityY=-5
    }
    Ghost.velocityY=Ghost.velocityY+0.8;
criar();
Doors();
blocos();
if (Ghost.collide(GrupoDeBlocos)){
  EstadoDeJogo="fim";
}
 }
 if (EstadoDeJogo=="fim"){
Ghost.remove();
fill ("green");
text("você morreu (mais uma vez)",300,300);
fundo.velocityY=0;
GrupoDeBlocos.destroyEach();
GrupoDeVaranda.destroyEach();
GrupoDePortasSelvagens.destroyEach();
 }
Ghost.collide(paredeDireita);
Ghost.collide(paredeEsquerda);
Ghost.collide(GrupoDeVaranda);
  
}
function criar(){
  if(frameCount%240==0){
    varanda= createSprite(200,20);
    varanda.velocityY=1;
    varanda.lifeTime=500;
    varanda.addImage("Roberto",Jobson);
    varanda.x=Math.round(random(120,400))
    GrupoDeVaranda.add(varanda);
  }
    
}
function Doors(){
  if(frameCount%240==0){
    Porta= createSprite(200,-50);
    Porta.velocityY=1;
    Porta.lifeTime=500;
    Porta.addImage("Claudio",batata);
    Porta.x=varanda.x;
    Ghost.depth=Porta.depth;
    Ghost.depth+=1
    GrupoDePortasSelvagens.add(Porta);

}
}
function blocos(){
  if(frameCount%240==0){
    BlocoInvisivel= createSprite(200,30);
    BlocoInvisivel.velocityY=1;
    BlocoInvisivel.lifeTime=500;
    BlocoInvisivel.x=varanda.x;
    BlocoInvisivel.width=varanda.width;
    BlocoInvisivel.height=2;
    BlocoInvisivel.visible=false;
    GrupoDeBlocos.add(BlocoInvisivel);
  }
}  