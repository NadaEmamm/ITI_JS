export const countries = [
    "Canada", "Mexico", "Brazil", "Argentina",
     "Germany", "France", "Italy", "Spain",
     "India", "China", "Japan",  "Australia",
     "Russia", "Egypt", "Nigeria", "Kenya",
     "Turkey", "Iran", "Argentina", "Chile"
 ];
export const animals = [
     "Lion", "Tiger", "Elephant", "Giraffe", "Zebra",
     "Kangaroo", "Panda", "Koala", "Penguin", "Sloth",
     "Bear", "Wolf", "Fox", "Horse", "Monkey",
     "Rabbit", "Cheetah", "Gorilla", "Leopard", "Rhino",
     "Hippo", "Alligator", "Crocodile", "Jaguar", "Otter",
     "Koala", "Bison", "Eagle", "Owl", "Sparrow"
 ];
export const movies = [
     "Inception", "Titanic", "Gladiator", "Avatar", "Jaws",
     "Shrek", "Casablanca", "Incredibles", "Rocky", "Frozen",
     "Memento", "Gravity", "Braveheart", "Interstellar", "Jumanji",
     "Exorcist", "Aladdin", "The Matrix", "Scarface", "Avatar",
     "Atonement", "Selena", "Amadeus", "Pulp", "Deadpool",
     "It", "Wonderland", "Zombieland", "Coco", "Aquaman"
 ];
export function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}