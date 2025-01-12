//[1] Write a function to calculate the sum of digits in a number

function sum(number){
    if(isNaN(number)){
        console.log("insert valid number");
    }
    else {
        var sum=0;
        var arr = String(number).split("");
        for(var i=0; i<arr.length;i++){
            sum+=parseInt(arr[i]);
        }
        }
    return sum;
    }
    var test =sum(123);
    console.log(test);
    
    //[2] Write a function to calculate the number of vowels in a string
    
    function vowels(string){
        if(!isNaN(string) || string.trim() === "" || typeof string !== "string"){
            console.log("insert valid string");
            return ;
        }
    var num=0;
    var test= string.split("");
    test.forEach(function (char) {
        char = char.toUpperCase();      
    if (char === "A"|| char ==="O" || char ==="U"|| char === "I"|| char ==="E"){
        num++;
    }
    });
    return num;
    }
    var string =prompt("insert a valid word");
    var test =vowels(string);
    console.log(test);

    //[3] Write a function to calculate the number of occurances of a character in a string

    function calculate(char, word) {
        if (typeof char !== 'string' || char.length !== 1 || typeof word !== 'string' ) {
            console.log("Insert Valid character and one string sentance")
        }
        else{
    
        var sum = 0;
        var arr = word.split("");
    
        arr.forEach(function(element) {
            if (element.toUpperCase() === char.toUpperCase()) {
                sum++;
            }
        });
    
        return sum;
    }
}
    console.log(calculate("N", 123)); // 2
    
