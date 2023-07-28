"use client";
import { useRef, useState } from "react";
import UploadButton from "./components/atoms/UploadButton/UploadButton";
import Triangle from "./components/complex/Triangle/Triangle";
import useTriangleBuilder from "./hooks/useTriangleBuilder";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileContent, setFileContent] = useState<string>("");

  const { triangleData, error, highlightedCells, maxSum } =
    useTriangleBuilder(fileContent);

  const handleLoadFile = (fileData: string) => {
    setFileContent(fileData);
    console.log(fileData);
  };

  return (
    <main className="min-h-screen py-8">
      {error ? (
        <div className="error-message bg-red-300 text-red-800 p-4 rounded-md ">
          {error}
        </div>
      ) : (
        <>
          <h1 className="font-extrabold text-4xl text-center">
            Triangle Challenge ▲
          </h1>
          <div className="flex justify-center  mt-4">
            <UploadButton onUpload={handleLoadFile} />
          </div>
          <h2 className="text-center text-lg font-extrabold mt-4">
            Triangle max sum: {maxSum}
          </h2>
          <div className="mt-4 w-full" >
            <Triangle
              triangleData={triangleData}
              highlightedCells={highlightedCells}
            />
          </div>
        </>
      )}
    </main>
  );
}
