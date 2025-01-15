import {countries,animals,movies,getRandomElement} from "./selectArr.js";
import {hidden} from "./hiddenFun.js";
import {startTimer} from "./startTimer.js";

let randomName;
export let randomWithSplit;
export let newTemp;

export function random(){
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
 randomName = getRandomElement(chosen); 
 randomWithSplit = randomName.toUpperCase().split(""); 
 newTemp = randomWithSplit.map(function() { return "_"; }); 
 console.log(newTemp); 
 console.log(randomName); //check
     hidden(); 
     startTimer();
 }
 
