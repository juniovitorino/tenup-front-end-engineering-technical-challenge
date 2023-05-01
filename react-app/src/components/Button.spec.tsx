import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";
import Button from "./Button";

describe("Anchor Link", () => {
  beforeEach(() => {});

  it("should render the anchor link", () => {
    render(
      <Button
        href="https://example.com"
        title="Example Website"
        ariaLabel="Learn more about Example Website">
        Anchor Text
      </Button>,
    );
    const anchorElement = screen.getByText(/Anchor Text/i);
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "https://example.com");
    expect(anchorElement).toHaveAttribute("title", "Example Website");
    expect(anchorElement).toHaveAttribute(
      "aria-label",
      "Learn more about Example Website",
    );
  });

  it("should not render the anchor link if href is not provided", () => {
    render(<Button>Click on me</Button>);
    const anchorElement = screen.queryByTestId("anchor");
    expect(anchorElement).not.toBeInTheDocument();
  });

  it("should not render the anchor link if children is not provided", () => {
    render(<Button href="#" />);
    const anchorElement = screen.queryByTestId("anchor");
    expect(anchorElement).not.toBeInTheDocument();
  });

  it("should not behave like a button when needed", () => {
    render(
      <Button href="https://example.com" isLink={true}>
        Download Now
      </Button>,
    );
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("role", "link");
  });
});
