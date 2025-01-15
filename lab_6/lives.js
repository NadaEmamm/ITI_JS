import { randomWithSplit as splittenWord,newTemp as newShow } from "./lab6.js";
import { display } from "./display.js";
export let live = 6;
export let flag ="valid";
export let takedLetters = [];

 export function lives(letter){
    if (isNaN(letter)){
            var check= splittenWord.includes(letter)
            if(check != false){

                for(var i =0; i<splittenWord.length;i++){
                    if(splittenWord[i]===letter){
                        newShow[i]=letter;
                    }
                }
            }
            else if(check ==false && !takedLetters.includes(letter)){
                --live;
                takedLetters.push(letter);
            }

            if (live <= 0) {flag ="Lose"} 
            else if (!newShow.includes("_")) { flag ="Win";}
}

       else {flag="Error";}

   display(flag);
}