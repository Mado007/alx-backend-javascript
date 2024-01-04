export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CarConstructor = this.constructor[Symbol.species] || this.constructor;
    return new CarConstructor();
  }
}
