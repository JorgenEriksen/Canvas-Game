class MovingObject {
  constructor(ctx, pos, radius, dir, speed, imgSrc, spriteWidth, spriteHeight) {
    this.ctx = ctx;
    this.pos = pos;
    this.radius = radius;
    this.dir = dir;
    this.speed = speed;
    this.timeSinceAnimationChange = 0;
    this.spriteIndex = 0;

    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;

    this.img = new Image();
    this.img.src = imgSrc;
  }
  draw() {
    //imgsrc, spriteposx, spriteposy, width, height, mapposx, mapposy, widthspace, heightspace

    let spriteStartX = this.spriteIndex * this.spriteWidth;

    this.ctx.drawImage(
      this.img,
      spriteStartX,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.pos.x,
      this.pos.y,
      this.spriteWidth,
      this.spriteHeight
    );

    /*
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    */
  }

  update(dt) {
    if (!dt) {
      return;
    }
    this.timeSinceAnimationChange += dt;
    if (this.timeSinceAnimationChange > 4) {
      if (this.spriteIndex >= 2) {
        this.spriteIndex = 0;
      }
      this.spriteIndex++;
      this.timeSinceAnimationChange = 0;
    }

    const normalizedDir = normalizeVector(this.dir.x, this.dir.y);

    if (this.imgSrc === "green") {
      //console.log(normalizedDir);
    }

    let newPos = {
      x: this.pos.x + this.speed * normalizedDir.x * dt,
      y: this.pos.y + this.speed * normalizedDir.y * dt,
    };

    this.pos = newPos;
  }
}
