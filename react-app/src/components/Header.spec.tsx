import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import Header from './Header'

describe("Header", () => {
  beforeEach(() => render(<Header />));
  it("should render a Header commponent", () => expect(screen.queryByTestId("main-header")).toBeInTheDocument());
});

