import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

jest.mock("./api");

describe("Test async", () => {
  test("should render users", async () => {
    render(<App />);

    const userList = screen.getAllByRole("listitem");
    expect(userList).toHaveLength(10);
  });
});
