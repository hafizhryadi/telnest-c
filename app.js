function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function() {
    alert(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function() {
    alert(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
    alert(`${this.brand} ${this.color} is turning`);
}

const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');

console.log(car1);
console.log(car2);

car1.drive();
car2.reverse();

class Phone {
    constructor(brand, color, CPU, ROM) {
        this.brand = brand;
        this.color = color;
        this.CPU = CPU;
        this.ROM = ROM;
    }

    up() {
        console.log(`${this.brand} ${this.color} state up`);
    }

    down() {
        console.log(`${this.brand} ${this.color} state down`);
    }

    heat() {
        console.log(`${this.brand} ${this.color} state heating`);
    }
}

const phone1 = new Phone('Redmi', "Black", 1, 128);
const phone2 = new Phone('Realmi', "Red", 2, 64);

console.log(phone1);

phone1.heat();
phone2.down();