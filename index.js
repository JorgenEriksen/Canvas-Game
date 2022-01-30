const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

var lastTime;
var requiredElapsed = 1000 / 100;

const playerPos = { x: 100, y: 100 };
let playerDir = { x: 0, y: 0 };
const playerRadius = 10;
const playerSpeed = 12;
const startDir = { x: -1, y: -1 };

const enemyPos = { x: 400, y: 300 };
const wandPos = { x: 200, y: 300 };
const wandRadius = 10;
const wantSpeed = 8;

const GamePlayer = new Player(
  ctx,
  playerPos,
  playerRadius,
  playerDir,
  playerSpeed
);
let testWand = new Wand(ctx, wandPos, wandRadius, startDir, wantSpeed);
let testEnemy = new Enemy(ctx, enemyPos, wandRadius, startDir, wantSpeed);

wandProjectiles = [testWand];
enemies = [testEnemy];

let frame = 0;

const gameLoop = (now) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!lastTime) {
    lastTime = now;
  }
  const dt = (now - lastTime) / 100;

  GamePlayer.update(dt, playerDir);
  GamePlayer.draw();

  /*
  enemies.forEach((enemy) => {
    enemy.updateDirection(GamePlayer.pos);
    enemy.update(dt);
    enemy.draw();
  });

  wandProjectiles.forEach((wandProjectile) => {
    wandProjectile.update(dt);
    wandProjectile.draw();
  });
  */

  lastTime = now;
  frame++;

  requestAnimationFrame(gameLoop);
};

gameLoop();

addEventListener("click", (event) => {
  const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
  );
});

addEventListener("keypress", (event) => {
  switch (event.code) {
    case "KeyW":
      playerDir.y = -1;
      break;
    case "KeyA":
      playerDir.x = -1;
      break;
    case "KeyS":
      playerDir.y = 1;
      break;
    case "KeyD":
      playerDir.x = 1;
      break;
    default:
    // code block
  }
});

addEventListener("keyup", (event) => {
  console.log(event);
  switch (event.code) {
    case "KeyW":
      playerDir.y = 0;
      break;
    case "KeyA":
      playerDir.x = 0;
      break;
    case "KeyS":
      playerDir.y = 0;
      break;
    case "KeyD":
      playerDir.x = 0;
      break;
    default:
    // code block
  }
});
