class Inventory {
  constructor() {
    this.guitars = [];
  }

  addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
    const guitarSpec = new GuitarSpec(builder, model, type, backWood, topWood);
    const guitar = new Guitar(serialNumber, price, guitarSpec);

    this.guitars.push(guitar);
  }

  getGuitar(serialNumber) {
    this.guitars.forEach((guitar) => {
      return guitar.getSerialNumber() === serialNumber ? guitar : null;
    });
  }

  search(searchSpec) {
    let matchingGuitars = [];

    this.guitars.forEach((guitar) => {
      let guitarSpec = guitar.getSpec();
      if (searchSpec.getBuilder() !== guitarSpec.getBuilder()) return;
      let model = searchSpec.getModel();
      if (model && model !== guitarSpec.getModel()) return;
      if (searchSpec.getType() !== guitarSpec.getType()) return;
      if (searchSpec.getBackWood() !== guitarSpec.getBackWood()) return;
      if (searchSpec.getTopWood() !== guitarSpec.getTopWood()) return;

      matchingGuitars.push(guitar);
    });

    return matchingGuitars;
  }
}
