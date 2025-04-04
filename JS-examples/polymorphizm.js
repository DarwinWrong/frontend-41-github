// ===================
// polymorphism
// ===================
class Build {
  constructor(type) {
    this.type = type;
  }
  build() {
    console.log(`${this.type} is building`);
  }
}

class House extends Build {
  build() {
    console.log('This is a House');
    super.build(); // super polimorphism
    console.log(`${this.type} is type of house`);
  }
}
const build = new Build('Build');
build.build();
const house = new House('House');
house.build();
