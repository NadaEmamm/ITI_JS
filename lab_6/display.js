 import{hidden}from "./hiddenFun.js";
 import {flag as dataToShow} from "./lives.js";
 import { countdown as dataToShowForDisplay} from "./startTimer.js";


export function display(dataToShow){
 if (dataToShow === "Error"){
     hidden();
     document.getElementById("extra").innerText= "Error : you must enter character ";
 }
 else if (dataToShow ==="valid"){
     hidden();
 }
 else if(dataToShow ==="Lose" ){
     clearInterval(dataToShowForDisplay);
      document.getElementById("game").innerHTML = `
      <h3>"Game Over! You've run out of lives."</h3>`
 }
 else if(dataToShow ==="Win"){
     clearInterval(dataToShowForDisplay);
     document.getElementById("game").innerHTML = `
  <h3>"Congratulations! You've guessed the word!"</h3>`
 }
 }