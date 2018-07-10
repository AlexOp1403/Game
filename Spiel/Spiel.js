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

var cards;

card = 0;
money = 5000;
move = 6;
points = 0;
bet = 0;

cardcpu = 0;
moneycpu = 5000;
movecpu = 6;
pointscpu = 0;
betcpu = 0;

pott = 0;
x = 0;

cards = ["images/ass.png", "images/zwei.png", "images/drei.png", "images/vier.png", "images/fünf.png", "images/sechs.png",
  "images/sieben.png", "images/acht.png", "images/neun.png", "images/zehn.png", "images/bube.png", "images/königin.png", "images/könig.jpg"
]

function start() {
  if (x == 0) {
    if (pott == 0) {
      alert("du musst ein gebot abgeben");
    } else {
      karte();
      x = 1;
    }
  }
}

function restart() {
  stop();
  card = 0;
  money = 5000;
  move = 6;
  points = 0;
  bet = 0;
  pott = 0;
  x = 0;
  start();
}

function stop() {
  pott = 0;
  window.location.reload();
}

function karte() {
  if (move > 0 && points < 21) {
    addCard();
    move--;
    console.log("Du hast noch " + move + " Züge");
  } else if (points > 21) {
    console.log("cpu hat gewonnnen");
  } else if (points == 21) {
    console.log("du hast gewonnen");
  }
}

function genug() {
  while (movecpu > 0 && pointscpu < 22 && points > pointscpu) {
    addCardCpu();
    movecpu--;
    console.log(movecpu);
  }
  if (pointscpu > 21 || move == 0 || movecpu == 0 || points == 21) {
    console.log("du hast gewonnen");
    money = pott + money;
  } else {
    console.log('cpu hat gewonnen')
    moneycpu = pott + moneycpu;
  }
}

function bet1000() {
  money = money - 1000;
  moneycpu = moneycpu - 1000;
  pott = 2000;
  console.log("der pott liegt bei " + pott + "");
}

function bet2000() {
  money = money - 2000;
  moneycpu = moneycpu - 2000;
  pott = 4000;
  console.log("der pott liegt bei " + pott + "");
}

function bet3000() {
  money = money - 3000;
  moneycpu = moneycpu - 3000;
  pott = 6000;
  console.log("der pott liegt bei " + pott + "");
}

function mymoney() {
  alert(money);
}

function cpumoney() {
  alert(moneycpu);
}

function chooseCard(card) {
  console.log(cards[card]);
  var x = document.createElement("IMG");
  x.setAttribute("src", cards[card]);
  x.setAttribute("width", "185");
  x.setAttribute("height", "290");
  x.setAttribute("left", "10");
  x.setAttribute("top", "100");
  document.body.appendChild(x);
}

function addCard() {
  card = Math.round(1 + Math.random() * 12);
  switch (card) {
    case 1:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 2:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 3:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 4:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 5:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 6:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 7:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 8:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 9:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 10:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 11:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 12:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
    case 13:
      chooseCard([card - 1]);
      points = points + card;
      console.log("es war " + card + "");
      console.log("du hast jetzt " + points + "");
      break;
  }
}

function addCardCpu() {
  cardcpu = Math.round(1 + Math.random() * 12);
  switch (cardcpu) {
    case 1:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 2:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 3:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("du hast jetzt " + pointscpu + "");
      break;
    case 4:
      console.log(cards[card - 1]);
      pointcpus = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 5:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 6:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 7:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 8:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 9:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 10:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 11:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 12:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
    case 13:
      console.log(cards[card - 1]);
      pointscpu = pointscpu + cardcpu;
      console.log("es war " + cardcpu + "");
      console.log("er hat jetzt " + pointscpu + "");
      break;
  }
}