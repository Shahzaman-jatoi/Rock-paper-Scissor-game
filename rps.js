let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById('user_score');
const compScoreSpan = document.getElementById('comp_score');
const iPaper = document.getElementById('p');
const iRock = document.getElementById('r');
const iScissor = document.getElementById('s');
const result = document.getElementById('result');
main();
function main(){
   iPaper.addEventListener('click', function(){
    game("p");
   });
   iRock.addEventListener('click', function(){
    game("r");
   });

   iScissor.addEventListener('click', function(){
    game("s");
   })
}
function compChoice(){
    let computerChoice = ['r', 'p', 's'];
    let finalChoice = Math.floor(Math.random()*3);
    return computerChoice[finalChoice];
}
function converter(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    if(letter === 's') return 'Scissor';
}
function win(userChoice, computerChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    result.innerHTML =  `${converter(userChoice)} beats ${converter(computerChoice)}.... You Win!! ✌️`
}function lost(userChoice, computerChoice){
    compScore++;
    compScoreSpan.innerHTML = compScore;
    userScoreSpan.innerHTML = userScore;
    result.innerHTML = `${converter(userChoice)} lost ${converter(computerChoice)}.... You Lost 😢`
}
function draw(userChoice, computerChoice){
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    result.innerHTML = `${converter(userChoice)} draws with ${converter(computerChoice)}..... Phewww its a draw 😮‍💨`
}

function game(userChoice){
    const computerChoice = compChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr":
           win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lost(userChoice, computerChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
           draw(userChoice, computerChoice);
            break;
    }
}