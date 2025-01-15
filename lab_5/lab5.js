
//   // Vehicle Constructor
// class Vehicle {
//     static count=0;
//     constructor(type, speed) {
//         if (Vehicle.count >= 50) {
//             throw new Error('Vehicle limit reached');
//        }
//         this.type = type;
//         this.speed = speed;
//        Vehicle.count++;
//     }

//     start = ()=> {
//         console.log('Vehicle started');
//     }
//     stop =()=> {
//         console.log('Vehicle stopped');
//     }
// }

// class Car extends Vehicle {
//     constructor(type,speed){
//     super(type, speed)
//     }
//     drive=()=> {
//         console.log('Driving the car');
//     }
// }

// try{
//     var first_Vehicle = new Vehicle('Truck', 60);
//     console.log(Vehicle.count);//1
//     var first_Car = new Car('Sedan', 120);
//     console.log(Vehicle.count);//2
// }
// catch(e){
//    console.error(e.message);
// }
// first_Car .drive(); 
// first_Car .start();  
//     console.log(first_Car );
//     console.log(first_Vehicle)

// function isCar(obj) {
//     // Method 1: Using instanceof
//     if (obj instanceof Car) {
//         return true;
//     }
//     // Method 2: constructor 
//     if (obj.constructor === Car) {
//         return true;
//     }
//     return false;
// }
// console.log(isCar(first_Vehicle));  
// console.log(isCar(first_Car ));  

//============================================================//
//2
async function fetchData() {
    try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();

        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await postsResponse.json();

        const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await commentsResponse.json();

        const tableBody = document.getElementById("myPage");

        users.forEach(user => {
            const row = document.createElement('tr');

            // User Name
            const userNameCell = document.createElement('td');
            userNameCell.textContent = user.username;
            row.appendChild(userNameCell);

            // Email
            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            // Company Name
            const companyCell = document.createElement('td');
            companyCell.textContent = user.company.name;
            row.appendChild(companyCell);

            // Address GeoLocation
            const geoCell = document.createElement('td');
            geoCell.textContent = `Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`;
            row.appendChild(geoCell);

            // Posts and Comments part
            const postsCell = document.createElement('td');
            const ul = document.createElement('ul');
            const userPosts = posts.filter(post => post.userId === user.id);
            
            userPosts.forEach(post => {
                const li = document.createElement('li');
                li.textContent = post.title;

                // number of comments for every post
                const postComments = comments.filter(comment => comment.postId === post.id);
                const commentCount = postComments.length;
                li.textContent += ` (Comments: ${commentCount})`;
                
                ul.appendChild(li);
            });

            postsCell.appendChild(ul);
            row.appendChild(postsCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error('There was an error fetching data:', error);
    }
}

fetchData();