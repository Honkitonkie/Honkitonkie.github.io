let startStake = 10;
let startMoney = 5000;
let target = 10000;
let randomCounts = [];
let randomBlack = [];
let total = 2;
let blackWins = 0;
let redWins = 0;
let maxWinsRed = 0;
let maxWinsBlack = 0;
let money = startMoney;
let stake = startStake;
let maxstake = 10;
let gameOverMinus = 0;
let gameOverPlus = 0;
let turns = 0;
let blackArray = [];
let maxBlackArray = [];
let redArray = [];
let maxRedArray = [];
let graphX = [325]
let graphY = [198.2]
let averageTurns = []
let x,y, average;
let totalaccount = -startMoney;
let averageBlackArray =[]
let averageRedArray =[]
let endpointsX =[]
let endpointsY =[]
let history =[]
let textHeight = 350

function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}


function draw() {
  noStroke();
  background(10,100,10);
  frameRate(8)
  turns++
  let index = floor(random(total));
  randomCounts[index]++;

  if (index == 0) {
    // Black wins
    blackWins++
    blackArray.push(1)
    history.push(0)
    averageBlackArray.push(blackArray.length);
    redArray.length = 0;

    // inzet eraf
    money = money - stake;
    stake = stake * 2;

    //langste streak bijhouden
    if (maxWinsBlack < blackWins) {
      maxWinsBlack = blackWins;
    }
    // maxstreak visualisatie data updaten?
    if (maxBlackArray.length < blackArray.length) {
      maxBlackArray.length = blackArray.length
    }
    //Wat is de hoogst geregistreerde inzet
    if (maxstake < stake) {
      maxstake = stake;
    }

    fill(0)
    ellipse(270, textHeight+30,20,20)
    // ellipse(200, textHeight-70,20,20)

  } else {
    //ELSE --> RedWins    
    redWins++
    blackArray.length = 0;
    redArray.push(1);
    history.push(1);
    averageRedArray.push(redArray.length);
    //inzet erbij
    money = money + stake;
    stake = startStake;
    //langste streak bijhouden
    if (maxWinsRed < redWins) {
      maxWinsRed = redWins;
    }
    // maxstreak visualisatie data updaten?
    if (maxRedArray.length < redArray.length) {
      maxRedArray.length = redArray.length
    }
    fill(255,0,0)
    ellipse(270, textHeight+30,20,20)
    // ellipse(200, textHeight-70,20,20)
  }

  //Set gameOver
  if (money < 0 || stake > money) {
    endpointsX.push(x)
    endpointsY.push(y)
    totalaccount = totalaccount + money
    totalaccount = totalaccount - startMoney
    gameOverMinus++
    averageTurns.push(turns) 
    turns = 0;
    stake = startStake;
    money = startMoney;
    redWins = 0;
    blackWins = 0;
  }
  if (money > target) {
    totalaccount = totalaccount + money
    totalaccount = totalaccount - startMoney
    gameOverPlus++
    averageTurns.push(turns) 
    turns = 0;
    stake = startStake;
    money = startMoney;
    redWins = 0;
    blackWins = 0;
  }

  //reeksRood visualiseren  
  fill(255, 0, 0);
  for (let j = 0; j < redArray.length; j++) {
    rect(75 + (15 * j), textHeight + 55, 10, 10)
  }
  textSize(16)
  //maxArrays Rood visualiseren
  text("Record reeks Rood = "+ maxRedArray.length,300,textHeight + 70)
  for (let j = 0; j < maxRedArray.length; j++) {
    rect(75 + (15 * j), textHeight + 65, 10, 10)
  }

  //reeksZwart visualiseren  
  fill(0);
  for (let j = 0; j < blackArray.length; j++) {
    rect(600 + (15 * j), textHeight + 55, 10, 10)
  }
  //maxArrays zwart visualiseren
  text("Record reeks Zwart = "+ maxBlackArray.length,825,textHeight + 70)
  for (let j = 0; j < maxBlackArray.length; j++) {
    rect(600 + (15 * j), textHeight + 65, 10, 10)
  }
  fill(255);

  history.reverse()
 for (let i = 1; i < 20; i++) {
  switch(history[i]) {
    case 0:
      fill(0)
      ellipse(290 + (15 *i), textHeight +30 , 10, 10 ) 
      // code block
      break;
    case 1:
      fill(255,0,0)
      ellipse(290 + (15 *i), textHeight +30 , 10, 10 ) 
      // code block
      break;
    default:
      // code block
  }
  history.reverse()
 }

  
  //GRAFIEK VAN GELD
  let oldTurns = 0;
  if(turns > 250){
    oldTurns= turns-250
  }
  average = getAvg(averageTurns)
  if(average) {
    average
  } else {
    average = 850;
  }
  x = map(turns, oldTurns, average, 325, width-100,true)
  graphX.push(x)
  
  y = map(money, 0, target, 300, 100,true)
  graphY.push(y);

  push()
  stroke(255)
  line(325,300, width-100,300)
  line(325,300, 325,100)

  strokeWeight(1);
  fill(127,50)
  line(325,200, width-100,200)

  rotate( radians(90));
  textSize(20)
  noStroke()
  fill(255)
  text("Saldo speelgeld", 120, -290)
  stroke(0)
  pop()
  // lijn trekken 
  for (let j = 1; j < graphX.length; j++) {
    stroke(255)
    strokeWeight(2)
    if(graphX[j] !== 325){
      line(graphX[j-1], graphY[j-1],graphX[j], graphY[j])   
    }
    //laatste coordinaten markeren
    for(let i = 0; i < endpointsY.length; i++){
      fill(255,0,0)    
      ellipse(endpointsX[i], endpointsY[i], 10, 10);
      fill(255,0,0)    
    }
  }
  
  //walker kleur
  noStroke()
  if(money < startMoney) {
    fill(255,0,0)    
    ellipse(x, y, 10, 10);
  } else if(money === startMoney) {
    fill(255)
    ellipse(x, y, 10, 10);
  } else if(money > startMoney){
    fill(0,255,0,125);
    ellipse(x, y, 10, 10);
  }
  

  
  textSize(20)
  fill(255)
  text("X-as # ronde", 600, textHeight - 20)

  //Status geld
  fill(220)
  noStroke()
  text("Totaalbalans €" + totalaccount, 75, 100)
  text("Huidige inzet €" + stake, 75, 150) 
  text("Speelgeld €" +money, 75, 200 )
 
  
  textSize(16)
  text("Doel €" +target, 75,225)
  //grafiektekst
  text("Ronde #" + turns + " = ", 75, textHeight+40)
  
  //sessiecijfers
  // text("Turn #" + turns + " = ", 75, textHeight-60)
  textSize(12)
  text("Gemiddeld # rondes: " + Math.round(average), 600, textHeight)
  
  text("Laatste 19", 300, textHeight)

    
  textSize(20)
  //sessiecijfers rood
  text("Rood streak # " + redArray.length, 75, textHeight+100);
  text("Totaal aantal keer rood #" + redWins, 75, textHeight +140)
  text("Doel mislukt: " + gameOverMinus, 75, textHeight+180);
  
  //sessiecijfers zwart
  text("Zwart Streak # " + blackArray.length, 600, textHeight+100);
  text("Totaal aantal keer Zwart #" + blackWins, 600, textHeight+140)
  text("Doel gehaald: " + gameOverPlus, 600, textHeight+180);
  
  //overkoepelende cijfers
  text("Totaal uitkomst rood #" + randomCounts[1], 75, textHeight+ 260);

  text("Totaal uitkomst zwart #" + randomCounts[0], 600,  textHeight+ 260);
  text("Totaal beurten #" + (Number(randomCounts[0]) + Number(randomCounts[1])), 600,  textHeight+ 300);
  text("Maximale inzet €" + maxstake, 75,  textHeight+ 300);

  text("Gemiddelde reeks zwart #" +  getAvg(averageBlackArray), 75,  textHeight+ 340);
  text("Gemiddelde reeks rood #" +  getAvg(averageRedArray), 600,  textHeight+ 340);

  //titels
  // fill(0)
  textSize(24)
  text("Alle Sessies samen", 75, textHeight + 225)
  text("Een experiment om te kijken of roulette winstgevend is als je de inzet blijft verdubbelen.", 75, textHeight-320)
  text("Speelt telkens door tot een max van "+ target+" of tot de inzet groter is dan het speelgeld.", 75, textHeight-290)
  
  //underlines
  stroke(255)
  line(75,585, width -75, textHeight+235);
  line(75,textHeight-280, width -75, textHeight-280);
}


function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return Math.round(total / grades.length);
}
