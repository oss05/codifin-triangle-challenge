const findTriangleHighlightedCells = (
  triangleData: number[][] | null
): [number, number][] => {
  if (!triangleData || triangleData.length === 0) {
    return [];
  }

  const numRows = triangleData.length;
  const highlightedCells: [number, number][] = [];
  let currentRow = 0;
  let currentCol = 0;

  for (let i = 0; i < numRows - 1; i++) {
    const left = triangleData[currentRow + 1][currentCol];
    const right = triangleData[currentRow + 1][currentCol + 1];
    const maxAdjacentNumber = Math.max(left, right);

    if (maxAdjacentNumber === left) {
      currentRow++;
    } else {
      currentRow++;
      currentCol++;
    }

    highlightedCells.push([currentRow, currentCol]);
  }

  return highlightedCells;
};

export default findTriangleHighlightedCells;
