class Guitar {
  constructor(serialNumber, price, spec) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.spec = spec;
  }

  getSpec() {
    return this.spec;
  }

  getSerialNumber() {
    return this.serialNumber;
  }

  getPrice() {
    return this.price;
  }
}
