interface IAccount {
  login: string;
  email: string;
  getInfo?(): void;
}

const Account = function ({ login, email }: IAccount) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login} , Email: ${this.email}`);
};

console.log(Account.prototype.getInfo);

const mango: IAccount = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo();

const poly: IAccount = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo();

export {};
