class Inventory {
  constructor() {
    this.guitars = [];
  }

  addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
    const guitar = new Guitar(
      serialNumber,
      price,
      builder,
      model,
      type,
      backWood,
      topWood
    );

    this.guitars.push(guitar);
  }

  getGuitar(serialNumber) {
    this.guitars.forEach((guitar) => {
      return guitar.getSerialNumber() === serialNumber ? guitar : null;
    });
  }

  search(searchGuitar) {
    let matchingGuitars = [];

    this.guitars.forEach((guitar) => {
      if (searchGuitar.getBuilder() !== guitar.getBuilder()) return;
      let model = searchGuitar.getModel();
      if (model && model !== guitar.getModel()) return;
      if (searchGuitar.getType() !== guitar.getType()) return;
      if (searchGuitar.getBackWood() !== guitar.getBackWood()) return;
      if (searchGuitar.getTopWood() !== guitar.getTopWood()) return;

      matchingGuitars.push(guitar);
    });

    return matchingGuitars;
  }
}
