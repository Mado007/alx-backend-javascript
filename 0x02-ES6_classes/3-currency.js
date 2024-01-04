export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(value) {
    this._code = value;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
