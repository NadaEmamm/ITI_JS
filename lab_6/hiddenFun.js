 import { newTemp as newTempForHidden } from "./lab6.js";
 import{live as liveForHidden,takedLetters as takedLettersForHidden} from "./lives.js"
 import { timerValue as  timerValueForHidden } from "./startTimer.js";
 import { submitLetter } from "./submittLetter.js";
 
 export function hidden() {
    console.log("Updating the word display...");//check
    document.getElementById("game").innerHTML = `
    <h3>${newTempForHidden.join(" ")}</h3>
    <p>Lives remaining: ${liveForHidden}</p>
   <p>Time remaining: <span id="timer">${timerValueForHidden}</span> seconds</p>
    <p>The wrong letters that you have entered: ${takedLettersForHidden.join(" ")}</p>
    <form id="letterForm">
    <label>Insert the letter: </label>
    <input type="text" id="char" maxlength="1" required>
    <button type="button" id="submit">Submit</button>
    </form>
    <p id="extra"></p>
`;
document.getElementById("submit").addEventListener("click", () => {
    submitLetter()
});
}