import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";
import SectionTitle from "./SectionTitle";

describe("Title", () => {
  beforeEach(() => {});

  it("should render a section title", () => {
    render(<SectionTitle>Section title</SectionTitle>);
    expect(screen.queryByText("Section title")).toBeInTheDocument();
  });
});
