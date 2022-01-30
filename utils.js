const normalizeVector = (x, y) => {
  if (x === 0 || y === 0) {
    return { x, y };
  }
  const magnitude = Math.sqrt(x * x + y * y);
  newX = x / magnitude;
  newY = y / magnitude;

  return { x: newX, y: newY };
};

const calculateDirection = (fromVector, toVector) => {
  const direction = {
    x: fromVector.x - toVector.x,
    y: fromVector.y - toVector.y,
  };
  return direction;
};
