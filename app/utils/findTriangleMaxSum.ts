const findTringleMaxSum = (triangleData: number[][] | null): number => {
  if (!triangleData || triangleData.length === 0 || !triangleData[0].length) {
    return 0;
  }

  const numRows = triangleData.length;
  const maxSum = triangleData.map((row) => [...row]);

  for (let i = numRows - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      const adjacentNumbers = [maxSum[i + 1][j], maxSum[i + 1][j + 1]];
      const maxAdjacentNumber = Math.max(...adjacentNumbers);
      maxSum[i][j] += maxAdjacentNumber;
    }
  }

  return maxSum[0][0];
};

export default findTringleMaxSum;
