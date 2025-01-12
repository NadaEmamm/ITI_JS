
// 1-Avarage Array
Array.prototype.average = function() {
    if (this.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    if (this.some(isNaN)) {
        throw new Error('Array must contain only numbers');
    }

    const sum = this.reduce((acc, num) => acc + num, 0);
    return sum / this.length;
};

var arr = [1, 2, 3, 4];
console.log(arr.average()); 

// 2-============================================================================//
// a- Change the default output for all objects to be 'This is an object'.
 
Object.prototype.toString = function() {
    return 'This is an object';
  };
  

//b-Make String(obj) of only the following object return the content of the message 
Object.prototype.toString = function() {
    if (this.hasOwnProperty('message')) {
      return this.message;
    }
    return 'This is an object';
  };
  
  var obj = {};
  console.log(String(obj)); 
  
  var objWithMessage = { message: 'This is a message' };
  console.log(String(objWithMessage)); 

  //3 =============================================================
  // Vehicle Constructor
function Vehicle(type, speed) {
    if (Vehicle.count >= 50) {
     return console.log('Vehicle limit reached');
    }

    this.type = type;
    this.speed = speed;

    Vehicle.count++;
}
Vehicle.count = 0; 

Vehicle.prototype.start = function() {
    console.log('Vehicle started');
};

Vehicle.prototype.stop = function() {
    console.log('Vehicle stopped');
};

function Car(type, speed, brand) {
    Vehicle.call(this, type, speed); 
    this.brand = brand;

}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function() {
    console.log('Driving the car');
};

    var vehicle1 = new Vehicle('Truck', 60);
    var car1 = new Car('Sedan', 120, 'Toyota');
    car1.drive(); 
    car1.start();  


//b-
function isCar(obj) {
    // Method 1: Using instanceof
    if (obj instanceof Car) {
        return true;
    }
    // Method 2: constructor 
    if (obj.constructor === Car) {
        return true;
    }
    return false;
}

var car1 = new Car('Sedan', 120, 'Toyota');
var vehicle1 = new Vehicle('Truck', 60, 'Ford');

console.log(isCar(car1));  
console.log(isCar(vehicle1));  