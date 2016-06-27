export default class Position {
  constructor(event) {
    this.event =  event;
  }
  getFixedCoordinates() {
    const target = this.event.currentTarget.getBoundingClientRect();
    return {
      x: target.width / 2 + Math.abs(target.left),
      y: target.top
    };
  }

  getFloatCoordinates() {
    return {
      x: this.event.clientX,
      y: this.event.clientY
    }
  }
}
