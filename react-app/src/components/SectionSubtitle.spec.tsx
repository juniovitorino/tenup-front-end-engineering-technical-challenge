import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";
import SectionSubtitle from "./SectionSubtitle";

describe("Section Subtitle", () => {
  beforeEach(() => {});

  it("should render a Subtitle", () => {
    render(<SectionSubtitle>Section Subtitle</SectionSubtitle>);
    expect(screen.queryByText("Section Subtitle")).toBeInTheDocument();
  });
});
