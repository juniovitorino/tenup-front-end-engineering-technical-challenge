import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import Header from './Header'

describe("Header", () => {
  beforeEach(() => render(<Header />));
  it("should render a Header commponent", () => expect(screen.queryByTestId("main-header")).toBeInTheDocument());
  it("should render a Header component with a Logo", () => expect(screen.getByTestId("companyLogo")).toBeInTheDocument())
  it("should render a Navigation Menu", () => expect(screen.getByTestId("menu")).toBeInTheDocument());
  it("should render a Section Title", () => expect(screen.getByText(/Engage brand and increase viewability./i)).toBeInTheDocument());
  it("should render a Section Subtitle", () => expect(screen.getByText(/Who we are/i)).toBeInTheDocument());
  it("should render a Learn More link", () => expect(screen.getByText(/Learn More/i)).toBeInTheDocument());
  it("should render a Download Now Button", () => expect(screen.getByText(/Download Now/i)).toBeInTheDocument());
});
