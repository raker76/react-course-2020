class Car {
  constructor(color, speed = 0) {
    this.color = color;
    this.speed = speed;
  }

  drive(speed) {
    this.speed = speed;
  }

  isFasterThan(other) {
    return this.speed > other.speed;
  }
}

class Race {
  addCars(...carsArray) {
    this.cars = carsArray;
  }

  winner() {
    return this.cars.sort((a, b) => (a.isFasterThan(b) ? -1 : 1))[0];
  }
}

const c1 = new Car("red");
const c2 = new Car("blue", 50);
const c3 = new Car("black");

const race = new Race();
race.addCars(c1, c2, c3);

c1.drive(20);
c3.drive(10);

var winningCar = race.winner();
console.log("And the winner is: " + winningCar.color);
