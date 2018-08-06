export const getLastItem = (arr = []) => arr[arr.length - 1];

const getInitialTowerState = (numBlocks) => {
  const tower1 = [];
  for (let i = numBlocks; i > 0; i--) {
    tower1.push(i);
  }

  return {
    tower1,
    tower2: [],
    tower3: [],
  };
};

export const getTowerList = (numBlocks = 3) =>
  JSON.parse(window.localStorage.getItem('towers')) || getInitialTowerState(numBlocks);

export const isValidMove = (currentTower, targetTower) => {
  const currentLast = getLastItem(currentTower);
  const targetLast = getLastItem(targetTower);

  // Current tower has block && target tower is empty
  // or last item is less than last item on current tower
  return Boolean(currentLast) && (!targetLast || currentLast < targetLast);
};

export const getInitialGameState = () => ({
  numMoves: 0,
  ...getTowerList(),
  currentSelectedTower: null,
});
