export let countdown;
export let timerValue=30;

 export function startTimer() {
    setTimeout(function() {
      countdown = setInterval(function () {
        timerValue--; 
            document.getElementById("timer").innerText = timerValue;
            if (timerValue <= 0) {
                clearInterval(countdown); 
                document.getElementById("game").innerHTML = `
                <h3>"Game Over! Time is up."</h3>` 
            }
        }, 1000);
    }, 0);  
}