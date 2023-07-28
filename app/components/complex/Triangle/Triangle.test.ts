import React from "react";
import { render } from "@testing-library/react";
import Triangle, { Props } from "./Triangle";

describe("Triangle Component", () => {
  const triangleData: number[][] = [[1], [2, 3], [4, 5, 6]];
  const highlightedCells: [number, number][] = [
    [0, 0],
    [1, 1],
  ];

  it("renders correctly with triangleData and highlightedCells", () => {
    const props: Props = { triangleData, highlightedCells };
    const { container } = render(<Triangle {...props} />);

    const rows = container.querySelectorAll(
      ".flex.justify-center.space-x-1.my-1"
    );
    expect(rows.length).toBe(3);

    const numbers = container.querySelectorAll(
      ".rounded-md.p-2.text-center.font-bold"
    );
    expect(numbers.length).toBe(6);

    expect(numbers[0].textContent).toBe("1");
    expect(numbers[1].textContent).toBe("2");
    expect(numbers[2].textContent).toBe("3");
    expect(numbers[3].textContent).toBe("4");
    expect(numbers[4].textContent).toBe("5");
    expect(numbers[5].textContent).toBe("6");

    const highlightedCellsDiv = container.querySelectorAll(".bg-green-500");
    expect(highlightedCellsDiv.length).toBe(2);
  });

  it("renders correctly with null triangleData and empty highlightedCells", () => {
    const props: Props = { triangleData: null, highlightedCells: [] };
    const { container } = render(<Triangle {...props} />);

    const rows = container.querySelectorAll(
      ".flex.justify-center.space-x-1.my-1"
    );
    expect(rows.length).toBe(0);

    const numbers = container.querySelectorAll(
      ".rounded-md.p-2.text-center.font-bold"
    );
    expect(numbers.length).toBe(0);

    const highlightedCellsDiv = container.querySelectorAll(".bg-green-500");
    expect(highlightedCellsDiv.length).toBe(0);
  });
});
