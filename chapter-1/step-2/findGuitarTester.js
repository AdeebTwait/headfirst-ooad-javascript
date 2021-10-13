class FindGuitarTester {
  find() {
    let inventory = new Inventory();
    this.initializeInventory(inventory);

    let whatErinLikes = new GuitarSpec(
      builder.FENDER,
      "2016",
      type.ELECTRIC,
      wood.COCOBOLO,
      wood.ALDER
    );

    let matchingGuitars = inventory.search(whatErinLikes);
    if (matchingGuitars.length) {
      console.log("Erin, you might like these guitars:");
      matchingGuitars.forEach((guitar) => {
        let guitarSpec = guitar.getSpec();

        console.info(
          "We've a " +
            guitarSpec.getBuilder() +
            " " +
            guitarSpec.getModel() +
            " " +
            guitarSpec.getType() +
            " guitarSpec:\n" +
            guitarSpec.getBackWood() +
            " Back and sides, \n" +
            guitarSpec.getTopWood() +
            " Top \n you can have it for only $" +
            guitar.getPrice() +
            "!\n ----------- \n"
        );
      });
    } else {
      console.log("Sorry, Erin, we have nothing for you");
    }
  }

  initializeInventory(inventory) {
    inventory.addGuitar(
      "13293480334",
      1200.3,
      builder.FENDER,
      "2016",
      type.ELECTRIC,
      wood.COCOBOLO,
      wood.ALDER
    );

    inventory.addGuitar(
      "40234823843",
      1500.0,
      builder.FENDER,
      "2016",
      type.ELECTRIC,
      wood.COCOBOLO,
      wood.ALDER
    );

    inventory.addGuitar(
      "44394903029",
      2000.8,
      builder.GIBSON,
      "2012",
      type.ACOUSTIC,
      12,
      wood.ADIRONDACK,
      wood.BRAZILIAN_ROSEWOOD
    );
  }
}
