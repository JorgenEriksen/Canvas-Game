class Wand extends MovingObject {
  constructor(ctx, pos, radius, dir, speed) {
    const imgSrc =
      "https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png";
    super(ctx, pos, radius, dir, speed, imgSrc);
  }
}
