interface Params {
  name: string;
  age: number;
  followers: number;
}

interface IUser {
  name: string;
  age: number;
  followers: number;
  getInfo(): void;
}

class User implements IUser {
  name: string;
  age: number;
  followers: number;
  constructor({ name, age, followers }: Params) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const mango: IUser = new User({
  name: 'Mango',
  age: 3,
  followers: 20,
});

mango.getInfo();

const poly: IUser = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo();
export {};
