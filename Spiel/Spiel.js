var move;
var point;
var card;
var bet;
var money;

move=6;
points=0;
card=0
money=5000

function start(){
  //hier wird das Spiel gestartet
}

function restart(){
  //hier wird das Speil neugestartet
}

function stop(){
  //hier wird das Spiel gestoppt
}

function bet1000(){
  money=money-1000;
  console.log(money);
}
function bet2000(){
  money=money-2000;
  console.log(money);
}
function bet3000(){
  money=money-3000;
  console.log(money);
}
function addCard(){
var c = Math.round(1+Math.random()*12);
switch (c) {
  case 1:
    card=img.src="./images/ass.png"
    points=points+card;
    break;
  case 2:
  card = img.src="./images/zwei.png"
    points=points+card;
    break;
  case 3:
    card=img.sr￼c="./images/drei.png"
    points=points+card;
    break;
  case 4:
    card=img.src="./images/vier.png"
    points=points+card;
    break;
  case 5:
    card=img.src="./images/fünf.png"
    points=points+card;
    break;
  case 6:
    card=img.src="./images/sechs.png"
    points=points+card;
    break;
  case 7:
    card=img.src="./images/sieben.png"
    points=points+card;
    break;
  case 8:
    card=img.src="./images/acht.png"
    points=points+card;
    break;
  case 9:
    card=img.src="./images/neun.png"
    points=points+card;
    break;
  case 10:
    card=img.src="./images/zehn.png"
    points=points+card;
    break;
  case 11:
    card=img.src="./images/bube.png"
    points=points+card;
    break;
  case 12:
    card=img.src="./images/königin.png"
    points=points+card;
    break;
  case 13:
    card=img.src="./images/könig.jpg"
    points=points+card;
    break;
}
}

if (move==0){
  if (points<=pointscpu)
  restart();
}

if (points==21){
  stop();
}
if (points>=21&&move==0){
  stop()
}
