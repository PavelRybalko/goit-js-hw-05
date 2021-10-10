interface Params {
  string: string;
}

interface IStringBuilder {
  append(str: string): void;
  prepend(str: string): void;
  pad(str: string): void;
}

class StringBuilder implements IStringBuilder {
  private _value: string;

  constructor(string: string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  public append(str: string): void {
    this._value = this._value + str;
  }

  public prepend(str: string): void {
    this._value = str + this._value;
  }

  public pad(str: string): void {
    this._value = str + this._value + str;
  }
}

const builder: IStringBuilder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);
export {};
