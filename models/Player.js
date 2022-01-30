class Player extends MovingObject {
  constructor(ctx, pos, radius, dir, speed) {
    const imgSrc =
      "https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png";
    const spriteWidth = 16;
    const spriteHeight = 18;

    super(ctx, pos, radius, dir, speed, imgSrc, spriteWidth, spriteHeight);
  }
  update(dt, dir) {
    this.dir = dir;
    super.update(dt);
  }
}
