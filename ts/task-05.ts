interface Params {
  maxSpeed: number;
  price: number;
}

interface ICar {
  turnOn(): void;
  turnOff(): void;
  accelerate(value: number): void;
  decelerate(value: number): void;
  drive(hours: number): void;
}

class Car implements ICar {
  //по умолчанию свойства уже public. Можно и не писать!
  private speed: number;
  private _price: number;
  private maxSpeed: number;
  private isOn: boolean;
  private distance: number;

  constructor({ maxSpeed, price }: Params) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
  public turnOn() {
    this.isOn = true;
  }
  public turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  public accelerate(value: number) {
    this.speed += this.speed + value <= this.maxSpeed ? value : 0;
  }
  public decelerate(value: number) {
    this.speed -= this.speed - value > 0 ? value : 0;
  }
  public drive(hours: number) {
    this.distance += this.isOn ? hours * this.speed : 0;
  }

  static getSpecs({ maxSpeed, price, speed, isOn, distance }): void {
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`
    );
  }
}

const mustang: ICar = new Car({ maxSpeed: 200, price: 2000 });

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

export {};
