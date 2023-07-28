import { NextPage } from "next";
import "./Triangle.css";
interface Props {
  triangleData: number[][] | null;
  highlightedCells: [number, number][];
}

const Trinagle: NextPage<Props> = ({ triangleData, highlightedCells }) => {
  return (
    <div className="">
      {triangleData?.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-1 my-1">
          {row.map((number, colIndex) => {
            const isHighlighted =
              highlightedCells.some(
                (cell) => cell[0] === rowIndex && cell[1] === colIndex
              ) ||
              (rowIndex === 0 && colIndex === 0);

            const cellClass = `rounded-md p-2 text-center font-bold ${
              isHighlighted ? "bg-green-500" : "bg-gray-500"
            }`;

            return (
              <div
                key={colIndex}
                className={`relative ${cellClass}`}
                style={{
                  transition: "background-color 0.5s",
                  animation: isHighlighted
                    ? `highlightAnimation ${0.5 * rowIndex}s ease-out`
                    : "none",
                }}
              >
                <span className="text-white">{number}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Trinagle;
