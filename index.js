let randomNumber1 = Math.round((Math.random() * 5) + 1);
if (randomNumber1 === 1) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "dice1.png");
}
else if (randomNumber1 === 2) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "dice2.png");
}
else if (randomNumber1 === 3) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "dice3.png");
}
else if (randomNumber1 === 4) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "dice4.png");
}
else if (randomNumber1 === 5) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "dice5.png");
}
else {
    document.getElementsByClassName("img1")[0].setAttribute("src", "dice6.png");
}


let randomNumber2=Math.round((Math.random() * 5) + 1);
if (randomNumber2 === 1) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "dice1.png");
}
else if (randomNumber2 === 2) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "dice2.png");
}
else if (randomNumber2 === 3) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "dice3.png");
}
else if (randomNumber2 === 4) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "dice4.png");
}
else if (randomNumber2 === 5) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "dice5.png");
}
else {
    document.getElementsByClassName("img2")[0].setAttribute("src", "dice6.png");
}


if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins";
}
else if(randomNumber1===randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Draw";
}
window.setTimeout(function(){
    window.location.reload();
},5000);

