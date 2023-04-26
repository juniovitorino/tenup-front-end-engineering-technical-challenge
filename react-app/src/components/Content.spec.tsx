import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import Content from "./Content";

describe("Home: Content section", () => {
  beforeEach(() => render(<Content />));

  it("should render a content section", () => {
    expect(screen.queryByTestId("content-section")).toBeInTheDocument()
  })
});
