"use client";
import { useState } from "react";
import UploadButton from "./components/atoms/UploadButton/UploadButton";
import Triangle from "./components/complex/Triangle/Triangle";
import useTriangleBuilder from "./hooks/useTriangleBuilder";

export default function Home() {
  const [fileContent, setFileContent] = useState<string>("");

  const { triangleData, error, highlightedCells, maxSum } =
    useTriangleBuilder(fileContent);

  const handleLoadFile = (fileData: string) => {
    setFileContent(fileData);
    console.log(fileData);
  };

  return (
    <main className="">
      {error ? (
        <div className="error-message bg-red-300 text-red-800 p-4 rounded-md ">
          {error}
        </div>
      ) : (
        <>
          <h2>{maxSum}</h2>
          <UploadButton onUpload={handleLoadFile} />
          <Triangle
            triangleData={triangleData}
            highlightedCells={highlightedCells}
          />
        </>
      )}
    </main>
  );
}
