// ===================
// super
// ===================
class Market {
  constructor(options) {
    this.type = options.type;
  }
  info() {
    console.log(`Market type: ${this.type}`);
  }
}

class ATB extends Market {
  // 'use strict';

  constructor(options) {
    super(options);
    this.name = options.name;
  }

  info() {
    super.info();
    console.log(`Market name: ${this.name}`);
    super.info();
  }
}
const atb = new ATB({ type: 'ATB', name: 'ATB Market' });
atb.info();
