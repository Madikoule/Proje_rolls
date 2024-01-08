
const scoreE1 = document.getElementById["score1"];
const scoreE2 = document.getElementById["score2"];
const diceE6 = document.querySelector[".dice-6"];

// btn 

const btnRoll = document.querySelector(".btn_Roll");

scoreE1.text = 0;
scoreE2.text = 0;
dice.classList.add("hiden");


btnRoll.addEventListener("click" , function (){
    dice.classList.remove("hidden");
})


//. generate the rndom number 
const dice = Math.floor(math.random() * 6) + 1;
