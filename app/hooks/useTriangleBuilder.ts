import { useEffect, useState } from "react";
import parseTriangleContent from "../utils/parseTriangleContent";
import findTriangleMaxSum from "../utils/findTriangleMaxSum";
import findTriangleHighlightedCells from "../utils/findTriangleHighlightedCells";

const useTriangleBuilder = (fileContent: string) => {
  const [triangleData, setTriangleData] = useState<number[][] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const parsedTriangle = parseTriangleContent(fileContent);
      setTriangleData(parsedTriangle);
      setError(null);
    } catch (error: any) {
      setTriangleData(null);
      setError(error.message);
    }
  }, [fileContent]);

  const maxSum = findTriangleMaxSum(triangleData);

  const highlightedCells = findTriangleHighlightedCells(triangleData);

  return { triangleData, error, highlightedCells, maxSum };
};

export default useTriangleBuilder;
