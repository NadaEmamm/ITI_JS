//(1) write JavaScript function that checks whether the passed string is a palindrome or not

var result = function(value){
   var result = String(value);//validation
   var temp =result.split("");//3shan
 if(result===temp.reverse().join("")){
    return console.log("the value is palindrome")
 } 
 else return console.log("the value is not palindrome")

}
result("nada");
result("naan");
result(NaN);
result(null);
result(true);
result();
result(1221);
console.log("================= End of Q1================")

//(2) write JavaScript function that accepts a price and discount as numbers and returns the dicounted price
 
function amount( price , discount) {
 if (isNaN(price) || isNaN(discount))
   return console.log("Please insert valid number");
else {
   if (discount > price){
      return console.log("discount cant be greater than price")
   }

   else{
   var sum = price - discount;
   return sum;
   }
   
}
} 
console.log(amount("nada",5.2));
console.log("================= End of Q2================")

/*
(3) create an array with your favourite movies
a- copy the array into a different variable
b- replace the third element with a different movie
c- return the last array item in 3 different ways
d- add a new movie to the beggining
*/
var movies = ["Final destination","Saw","The ring","any thing"]; 
var movies2= movies.map(function (element){
   return element ;
}
)

console.log(movies2);
movies2[2]="ahmed";
console.log(movies2);
 console.log(movies2.slice(movies2.length-1));
 console.log(movies2[movies2.length-1]);
 console.log(movies2.reverse()[0]);
 movies2.reverse().unshift("new");
console.log(movies2);
console.log("================= End of Q3================");

//(4) Write a function that accept a sentence and return the longest word within the input

function longestWord(sentence) {
   var temp = sentence.split(" ");
   var word =temp[0]; 
   for (var i=1; i < temp.length ; i++) {
      if (temp[i].length > word.length) {
         word=temp[i]; 
      }
   }
   return word;
};
console.log(longestWord("my name is nada 111111111111111111 emaaaam noooo000000"));
console.log("================= End of Q4================");
/*(5) Create a function that takes the following:
    a- User name using prompt ( required)
    b- User Grades in one prompt in the format: 
        “90,50,30,10”
    Welcome the user by Name on console
    and display grades as table on console
    after that show the average grade of user’s grades.*/

var flag =1;
var userName =prompt("Please insert valid name");

while(flag==1){
   if (!isNaN(userName) || userName.trim() === "") {

   var userName =prompt("Please insert valid name");
} 
else{
   flag =0;
}
};
var userGrade=prompt("Please insert your grade in format '90,50,30,10'");
console.log("Hello"+" "+userName);
var showGrades=userGrade.split(",");
console.table(showGrades);
var sumGrade=0;
for(var i=0; i<showGrades.length;i++){
sumGrade+=parseFloat(showGrades[i]);
}
console.log("The avarage = "+sumGrade/showGrades.length)
console.log("================= End of Q5================");

//============================================================//
var orders = [
   {
     orderId: 'ORD001',
     customer: 'John Doe',
     items: 'item1:2,item2:1,item3:5',
     orderDate: '2023-12-01',
     deliveryDate: '2023-12-05',
     deliveryAddress: '123, Main Street, Springfield, USA',
   },
   {
     orderId: 'ORD002',
     customer: 'Jane Smith',
     items: 'itemA:3,itemB:4',
     orderDate: '2023-11-15',
     deliveryDate: '2023-11-20',
     deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
   },
   {
     orderId: 'ORD003',
     customer: 'Alice Johnson',
     items: 'itemX:1',
     orderDate: '2023-10-10',
     deliveryDate: '2023-10-15',
     deliveryAddress: '456, Pine Lane, Denver, USA',
   }
 ];
 
 //Transform the orders array into the following format:

var formattedOrders =orders.map(function(user){

var arr=user.items.split(",");
var sum=0;
for (var i = 0; i < arr.length; i++) {
   sum += parseInt(arr[i].split(":")[1]);
}
   return {
      orderId:user.orderId,
      customer:user.customer,
      totalItems:sum,
      orderDate:user.orderDate,
      deliveryDate:user.deliveryDate,
      deliveryDuration:user.deliveryDate.split("-")[2] - user.orderDate.split("-")[2],
      deliveryCountry:user.deliveryAddress.split(",")[3],
      deliveryCity:user.deliveryAddress.split(",")[2],
      deliveryStreet:user.deliveryAddress.split(",")[1],
      buildingNumber:user.deliveryAddress.split(",")[0],
   }

}
)

console.log(formattedOrders);

