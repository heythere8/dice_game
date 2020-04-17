
var randomnumber1=Math.floor(Math.random()*6+1);
var randomnumber2=Math.floor(Math.random()*6+1);

if(randomnumber1===1){
  if(randomnumber2===1){
    document.querySelector("h1").textContent="draw";
    document.querySelector("h1").style.color="green";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
      document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if(randomnumber2===2){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";

    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if(randomnumber2===3){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if(randomnumber2===4){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if(randomnumber2===5){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else{
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else if(randomnumber1===2){
  if(randomnumber2===1){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";

    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if(randomnumber2===2){
    document.querySelector("h1").textContent="draw";
    document.querySelector("h1").style.color="green";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if(randomnumber2===3){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if(randomnumber2===4){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if(randomnumber2===5){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else {
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else if(randomnumber1===3){

  if(randomnumber2===1){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if(randomnumber2===2){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if(randomnumber2===3){
    document.querySelector("h1").textContent="draw";
    document.querySelector("h1").style.color="green";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if(randomnumber2===4){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if(randomnumber2===5){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else {
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else if(randomnumber1===4){
  if(randomnumber2===1){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if(randomnumber2===2){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if(randomnumber2===3){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
else if(randomnumber2===4){
    document.querySelector("h1").textContent="draw";
    document.querySelector("h1").style.color="green";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
else if(randomnumber2===5){
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
else {
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else if(randomnumber1===5){
  if(randomnumber2===1){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
else  if(randomnumber2===2){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
else  if(randomnumber2===3){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
else  if(randomnumber2===4){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
else  if(randomnumber2===5){
    document.querySelector("h1").textContent="draw";
    document.querySelector("h1").style.color="green";
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else{
    document.querySelector("h1").textContent="player2 wins";
    document.querySelector("h1").style.color="blue";
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
else{
  if(randomnumber2===1){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if(randomnumber2===2){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if(randomnumber2===3){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if(randomnumber2===4){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if(randomnumber2===5){
    document.querySelector("h1").textContent="player1 wins";
    document.querySelector("h1").style.color="red";
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else{
      document.querySelector("h1").textContent="draw";
      document.querySelector("h1").style.color="green";

  document.querySelector(".img1").setAttribute("src","images/dice6.png");
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}
