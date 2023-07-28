import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Importa para usar expect.extend

import Triangle from "./Triangle";

describe("Triangle Component", () => {
  const triangleData = [[1], [2, 3], [4, 5, 6]];
  const highlightedCells = [
    [0, 0],
    [1, 1],
  ];

  it("renders triangle data and applies highlight animation", () => {
    render(
      <Triangle
        triangleData={triangleData}
        highlightedCells={highlightedCells}
      />
    );

    // Check if the triangle data is rendered correctly
    const numbers = screen.getAllByText(/[\d]+/);
    expect(numbers).toHaveLength(6);
    expect(numbers[0]).toHaveTextContent("1");
    expect(numbers[1]).toHaveTextContent("2");
    expect(numbers[2]).toHaveTextContent("3");
    expect(numbers[3]).toHaveTextContent("4");
    expect(numbers[4]).toHaveTextContent("5");
    expect(numbers[5]).toHaveTextContent("6");

    // Check if the highlighted cells have the correct background color
    const highlightedCellsDiv = screen.getAllByTestId("highlighted-cell");
    expect(highlightedCellsDiv).toHaveLength(2);
    expect(highlightedCellsDiv[0]).toHaveStyle("background-color: #34D399");
    expect(highlightedCellsDiv[1]).toHaveStyle("background-color: #34D399");
  });

  it("does not render triangle data if triangleData is null", () => {
    render(
      <Triangle triangleData={null} highlightedCells={highlightedCells} />
    );

    const numbers = screen.queryAllByText(/[\d]+/);
    expect(numbers).toHaveLength(0);
  });
});
