import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { MOCK_RESPONSE } from "./App.mocks";

jest.mock("./api", () => ({
  fakeApi: jest.fn(),
}));

describe("Test async", () => {
  test("should render users", async () => {
    const { fakeApi } = require('./api');
    fakeApi.mockReturnValue(MOCK_RESPONSE);

    render(<App />);

    const mockUser = await screen.findByText("Boris Johnson");
    expect(mockUser).toBeInTheDocument();
  });
});
