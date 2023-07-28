const parseTriangleContent = (fileContent: string): number[][] => {
  const trimmedContent = fileContent.trim();

  const rows = trimmedContent.split("\n");
  const parsedRows = rows.map((row) => {
    const numbers = row.trim().split(/\s+/).map(Number);
    if (numbers.some(isNaN)) {
      throw new Error("Invalid input. Triangle should contain only numbers.");
    }
    return numbers;
  });

  if (parsedRows.length === 0 || parsedRows[0].length === 0) {
    throw new Error("Invalid input. Triangle cannot be empty.");
  }

  return parsedRows;
};

export default parseTriangleContent;
