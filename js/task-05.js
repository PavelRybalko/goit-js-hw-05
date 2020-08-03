class Car {
  static getSpecs({ maxSpeed, price, speed, isOn, distance }) {
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`
    );
  }
  constructor({ maxSpeed, price, speed = 0, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    this.speed += this.speed + value <= this.maxSpeed ? value : 0;
  }
  decelerate(value) {
    this.speed -= this.speed - value > 0 ? value : 0;
  }
  drive(hours) {
    this.distance += this.isOn ? hours * this.speed : 0;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
