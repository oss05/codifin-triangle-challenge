import React from "react";
import { render, fireEvent } from "react-dom";
import Home from "./Home";

// Mock useState hook
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Home Page", () => {
  it("renders error message if there is an error", () => {
    const setErrorMock = jest.fn();
    React.useState.mockReturnValueOnce(["", setErrorMock]);

    const { container } = render(<Home />);

    const errorMessageElement = container.querySelector(".error-message");
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement.textContent).toBe("Triangle content is empty.");
  });

  it("renders maxSum and UploadButton if there is no error", () => {
    const setFileContentMock = jest.fn();
    React.useState.mockReturnValueOnce(["", setFileContentMock]);

    const { container } = render(<Home />);

    const maxSumElement = container.querySelector("h2");
    const uploadButtonElement = container.querySelector("button");
    expect(maxSumElement).toBeInTheDocument();
    expect(uploadButtonElement).toBeInTheDocument();
  });

  it("updates fileContent and calls useTriangleBuilder when UploadButton is clicked", () => {
    const setFileContentMock = jest.fn();
    React.useState.mockReturnValueOnce(["", setFileContentMock]);

    const { container } = render(<Home />);

    const uploadButtonElement = container.querySelector("button");
    fireEvent.click(uploadButtonElement);

    expect(setFileContentMock).toHaveBeenCalledTimes(1);
    expect(setFileContentMock).toHaveBeenCalledWith("1\n2 3\n4 5 6");
  });
});
