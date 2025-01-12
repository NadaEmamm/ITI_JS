
var countries = [
   "Canada", "Mexico", "Brazil", "Argentina",
    "Germany", "France", "Italy", "Spain",
    "India", "China", "Japan",  "Australia",
    "Russia", "Egypt", "Nigeria", "Kenya",
    "Turkey", "Iran", "Argentina", "Chile"
];
var animals = [
    "Lion", "Tiger", "Elephant", "Giraffe", "Zebra",
    "Kangaroo", "Panda", "Koala", "Penguin", "Sloth",
    "Bear", "Wolf", "Fox", "Horse", "Monkey",
    "Rabbit", "Cheetah", "Gorilla", "Leopard", "Rhino",
    "Hippo", "Alligator", "Crocodile", "Jaguar", "Otter",
    "Koala", "Bison", "Eagle", "Owl", "Sparrow"
];
var movies = [
    "Inception", "Titanic", "Gladiator", "Avatar", "Jaws",
    "Shrek", "Casablanca", "Incredibles", "Rocky", "Frozen",
    "Memento", "Gravity", "Braveheart", "Interstellar", "Jumanji",
    "Exorcist", "Aladdin", "The Matrix", "Scarface", "Avatar",
    "Atonement", "Selena", "Amadeus", "Pulp", "Deadpool",
    "It", "Wonderland", "Zombieland", "Coco", "Aquaman"
];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
//====================================================================//
var randomNumber;
var randomWithSplit;
var live = 6;
var takedLetters = [];
var newTemp;
var timerValue=30;
var countdown;
var flag ="valid";
//====================================================== function to choose the category
function random(){
var chosen ;
var target=document.getElementById("select").value;
if(target==="Movies"){
    chosen=movies;
}
 else if  (target==="Countries"){
        chosen=countries;
}
else if(target ==="Animals"){
    chosen=animals;
}

randomNumber = getRandomElement(chosen); 
randomWithSplit = randomNumber.toUpperCase().split(""); 
newTemp = randomWithSplit.map(function() { return "_"; }); 
console.log(newTemp); 
console.log(randomNumber); 
    hidden(); 
    startTimer();
}
//=== =============================================================== for display _ _ 
function hidden() {
    console.log("Updating the word display...");
    document.getElementById("game").innerHTML = `
    <h3>${newTemp.join(" ")}</h3>
    <p>Lives remaining: ${live}</p>
   <p>Time remaining: <span id="timer">${timerValue}</span> seconds</p>
    <p>The wrong letters that you have entered: ${takedLetters.join(" ")}</p>
    <form id="letterForm">
    <label>Insert the letter: </label>
    <input type="text" id="char" maxlength="1" required>
    <button type="button" onclick="submitLetter()">Submit</button>
    </form>
    <p id="extra"></p>
`;
}
//==================================================================== 
function startTimer() {
    setTimeout(function() {
        countdown = setInterval(function () {
            timerValue--; 
            document.getElementById("timer").innerText = timerValue;
            if (timerValue <= 0) {
                clearInterval(countdown);  
                flag="Lose";
                display(flag);
            
            }
        }, 1000);
    }, 0);  
}

//================================================================= function for the button to take the char and call lives function
function submitLetter() {
    var letter = document.getElementById("char").value.toUpperCase();     
    if (letter !== "" && !newTemp.includes(letter)) {
       timerValue = 30; 
        lives(letter); 
    }      
}
//====================================================================== game function 
function lives(letter){
    if (isNaN(letter)){
            var check= randomWithSplit.includes(letter)
            if(check != false){

                for(var i =0; i<randomWithSplit.length;i++){
                    if(randomWithSplit[i]===letter){
                        newTemp[i]=letter;
                    }
                }
            }
            else if(check ==false && !takedLetters.includes(letter)){
                --live;
                takedLetters.push(letter);
            }

            if (live <= 0) {flag ="Lose"} 
            else if (!newTemp.includes("_")) { flag ="Win";}
}

       else {flag="Error";}

   display(flag);
}

function display(flag){
if (flag === "Error"){
    hidden();
    document.getElementById("extra").innerText= "Error : you must enter character ";
}
else if (flag ==="valid"){
    hidden();
}
else if(flag ==="Lose"){
    clearInterval(countdown);
     document.getElementById("game").innerHTML = `
     <h3>"Game Over! You've run out of lives."</h3>`
}
else if(flag ==="Win"){
    clearInterval(countdown);
    document.getElementById("game").innerHTML = `
 <h3>"Congratulations! You've guessed the word!"</h3>`
}
}