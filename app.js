const btnNew = document.getElementById('btn-new'); 
const btnRoll = document.getElementById('btn-roll'); 
const btnHold = document.getElementById('btn-hold'); 
const imageSrc = document.getElementById('dices');
const currScore0 = document.getElementById('cur-score0');
const currScore1 = document.getElementById('cur-score1');
const section0 = document.getElementById('player0');
const section1 = document.getElementById('player1');
const mainSco0 = document.getElementById('score0');
const mainSco1 = document.getElementById('score1');
const player1 = document.getElementById('playerone');
const player2 = document.getElementById('playertwo');
let turn0 = false;
let curr0 = 0;
let curr1 = 0;
let mainScore0 = 0;
let mainScore1 = 0;


btnRoll.addEventListener("click", () => {
    let randomNum = [1, 2, 3, 4, 5, 6];
    let value = randomNum[Math.round(Math.random()*5)];
    console.log(value)
    imageSrc.src = `dice-${value}.png`;
  if(!turn0){
      if(value > 1){
          curr0 += value;
          currScore0.innerText = curr0;
        }else{
        section1.style.backgroundColor = "#daaebc";
        section0.style.backgroundColor = "#bb7a96";
        curr0 = 0;
        currScore0.innerText = curr0;
        turn0 = true;
    }
  }else{
      if(value > 1){
          curr1 += value;
          currScore1.innerText = curr1; 
        }else{
        section1.style.backgroundColor = "#bb7a96";
        section0.style.backgroundColor = "#daaebc";
        curr1 = 0;
        currScore1.innerText = curr1;
        turn0 = false;
    }
  }
});


btnHold.addEventListener("click", () => {
    if(!turn0){
        mainScore0 += Number(currScore0.innerText);
        mainSco0.innerText = mainScore0;
        console.log(mainScore0)
        section1.style.backgroundColor = "#daaebc";
    section0.style.backgroundColor = "#bb7a96";
    curr0 = 0;
    currScore0.innerText = 0;
        turn0 = true;
        checkWin();
    
    }else{
        mainScore1 += Number(currScore1.innerText);
        mainSco1.innerText = mainScore1;
        console.log(mainScore1)
        section1.style.backgroundColor = "#bb7a96";
    section0.style.backgroundColor = "#daaebc";
    curr1 = 0;
    currScore1.innerText = 0;
        turn0 = false;
        checkWin();
}
})


btnNew.addEventListener('click', () => {
    curr0 = 0;
    curr1 = 0;
    mainScore0 = 0;
    mainScore1 = 0;
    turn0 = false;
    section0.style.backgroundColor = "#daaebc";
    section1.style.backgroundColor = "#bb7a96";
    player2.innerText = "Player 2";
    player1.innerText = `Player 1`;
    mainSco0.innerText = 0;
    mainSco1.innerText = 0;
    currScore0.innerText = 0;
    currScore1.innerText = 0;
    btnRoll.disabled = false;
        btnHold.disabled = false;
        imageSrc.src = ``;
})

function checkWin(){
    if(mainScore0 >= 100){
        section0.style.backgroundColor = "#2f2f2f";
        console.log("player1win")
        player1.style.color = "#c7365f";
        player1.innerText = `Player 1 🎉`;
        imageSrc.src = ``;
        btnRoll.disabled = true;
        btnHold.disabled = true;
    }else if(mainScore1 >= 100){
        console.log('player 1 win')
        section1.style.backgroundColor = "#2f2f2f";
        player2.innerText = "Player 2 🎉";
        player2.style.color = "#c7365f";
        imageSrc.src = ``;
        btnRoll.disabled = true;
        btnHold.disabled = true;
    }
}

