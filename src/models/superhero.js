class SuperHero {
  constructor() {
    this.list = {
      SUPERMAN: true,
      THOR: true,
      ROBIN: true,
      IRONMAN: true,
      GHOSTRIDER: true,
      CAPTAINAMERICA: true,
      FLASH: true,
      WOLVERINE: true,
      BATMAN: true,
      HULK: true,
      BLADE: true,
      PHANTOM: true,
      SPIDERMAN: true,
      BLACKWIDOW: true,
      HELLBOY: true,
      PUNISHER: true,
    };
  }

  getSupreHero(name) {
    if (name in this.list) {
      return this.list[name];
    }
  }
}

module.exports = new SuperHero();
