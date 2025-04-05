class DomElement {
  constructor(id) {
    this.$element = document.getElementById(id);
  }
  setColor(color) {
    if (this.$element) {
      this.$element.style.color = color;
    }
  }
  setFondSize(size) {
    if (this.$element) {
      this.$element.style.fontSize = size + "px";
    }
  }
  setChangeDisp(disp, width, hei) {
    if (this.$element) {
      this.$element.style.cssText = `display: ${disp}; width: ${width}px; height: ${hei}px`;
    }
  }
}
const li1 = new DomElement("1");
li1.setColor("red");
li1.setFondSize(24);
li1.setChangeDisp("block", 200, 300);
