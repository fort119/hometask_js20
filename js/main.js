class Human {
  name;
  sex;

  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Flat {
  residents = [];

  addResidents(resident) {
    this.residents.push(resident);
  }
}

class House {
  flats = [];
  maxAmountOfFlats;

  constructor(maxAmountOfFlats) {
    this.maxAmountOfFlats = maxAmountOfFlats;
  }

  addFlatToTheHouse(flat) {
    if (this.flats.length < this.maxAmountOfFlats) {
      this.flats.push(flat);
    } else {
      console.log(`К сожалению, в этом доме уже максимальное количество квартир. Добавление невозможно.`)
    }
  }
}

let human1 = new Human("Vanya", "male");
let human2 = new Human("Sasha", "female");
let human3 = new Human("Vitya", "male");

let flat1 = new Flat();
let flat2 = new Flat();
let flat3 = new Flat();
let flat4 = new Flat();

flat1.addResidents(human1);
flat1.addResidents(human2);

flat2.addResidents(human2);
flat2.addResidents(human3);

flat3.addResidents(human1);
flat3.addResidents(human3);

flat4.addResidents(human2);
flat4.addResidents(human1);

let house1 = new House(3);

house1.addFlatToTheHouse(flat1);
house1.addFlatToTheHouse(flat2);
house1.addFlatToTheHouse(flat3);
house1.addFlatToTheHouse(flat4);