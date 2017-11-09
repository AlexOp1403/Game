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

function addCard(){
card = Math.round(1+Math.random()*12);

switch (card) {
  case 1:
    img.src="./images/ass.png"
    break;
  default:

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
