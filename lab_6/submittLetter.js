import { lives  } from "./lives.js";
import { newTemp as newTempForSubmit } from "./lab6.js";
 export function submitLetter() {
    var letter = document.getElementById("char").value.toUpperCase();     
    if (letter !== "" && !newTempForSubmit.includes(letter)) {
        lives(letter); 
    }      
}