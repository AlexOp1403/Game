var move;
var points;
var card;
var bet;
var money;

var movecpu;
var pointscpu;
var cardcpu;
var betcpu;
var moneycpu;

var pott;
var x;

card=0;
money=5000;
move=6;
points=0;
bet=0;

cardcpu=0;
moneycpu=5000;
movecpu=6;
pointscpu=0;
betcpu=0;

pott = 0;
x=0;

function start(){
  if(x==0){
    if(pott==0){
     alert("du musst ein gebot abgeben");
    }else{
    karte();
    x=1;
    }
  }
}

function restart(){
  stop();
  card=0;
  money=5000;
  move=6;
  points=0;
  bet=0;
  pott=0;
  x=0;
  start();
}

function stop(){
  pott=0;
  window.location.reload();
}

function karte(){
  if (move > 0 && points < 21) {
    addCard();
    move--;
    console.log(move);
  }
  else if (points > 21){
    console.log("cpu hat gewonnnen");
  }
  else if(points==21){
    console.log("du hast gewonnen");
  }
}

function genug(){
  while (movecpu > 0 && pointscpu < 22 && points > pointscpu) {
    addCardCpu();
    movecpu--;
    console.log(movecpu);
  }
    if (pointscpu > 21 || move == 0 || movecpu == 0 || points == 21){
      console.log("du hast gewonnen");
      money=pott+money;
    }
      else{
        console.log('cpu hat gewonnen')
        moneycpu=pott+moneycpu;
      }
}

function bet1000(){
  money = money - 1000;
  moneycpu = moneycpu - 1000;
  pott = 2000;
  console.log("der pott ist "+pott+"");
}
function bet2000(){
  money=money - 2000;
  moneycpu = moneycpu - 2000;
  pott = 4000;
  console.log("der pott ist "+pott+"");
}
function bet3000(){
  money=money - 3000;
  moneycpu = moneycpu - 3000;
  pott = 6000;
  console.log("der pott ist "+pott+"");
}
function mymoney(){
  alert(money);
}
function cpumoney(){
  alert(moneycpu);
}
function addCard(){
card = Math.round(1+Math.random()*12);
switch (card) {
  case 1:
    document.getElementById("card").src="images/ass.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 2:
  document.getElementById("card").src="images/zwei.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 3:
  document.getElementById("card").src = "images/drei.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 4:
  document.getElementById("card").src="images/vier.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 5:
  document.getElementById("card").src="images/fünf.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 6:
  document.getElementById("card").src="images/sechs.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 7:
  document.getElementById("card").src="images/sieben.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 8:
  document.getElementById("card").src="images/acht.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 9:
  document.getElementById("card").src="images/neun.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 10:
  document.getElementById("card").src="images/zehn.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 11:
  document.getElementById("card").src="images/bube.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 12:
  document.getElementById("card").src="images/königin.png";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  case 13:
  document.getElementById("card").src="images/könig.jpg";
    points=points+card;
    console.log("es war "+ card +"");
    console.log("du hast jetzt "+ points +"");
    break;
  }
}

function addCardCpu(){
  cardcpu = Math.round(1+Math.random()*12);
  switch (cardcpu) {
    case 1:
      src="./images/ass.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 2:
      src="./images/zwei.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 3:
      src = "./images/drei.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("du hast jetzt "+ pointscpu +"");
      break;
    case 4:
      src="./images/vier.png";
      pointcpus=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 5:
      src="./images/fünf.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 6:
      src="./images/sechs.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu+"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 7:
      src="./images/sieben.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 8:
      src="./images/acht.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 9:
      src="./images/neun.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 10:
      src="./images/zehn.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 11:
      src="./images/bube.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 12:
      src="./images/königin.png";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    case 13:
      src="./images/könig.jpg";
      pointscpu=pointscpu+cardcpu;
      console.log("es war "+ cardcpu +"");
      console.log("er hat jetzt "+ pointscpu +"");
      break;
    }
  }
