import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import AnchorLink from './AnchorLink'

describe('Anchor Link', () => {
  beforeEach(() => { });

  it('should render the anchor link', () => {
    render(<AnchorLink href="https://example.com" title="Example Website" ariaLabel="Learn more about Example Website">Anchor Text</AnchorLink>);
    const anchorElement = screen.getByText(/Anchor Text/i);
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute('href', 'https://example.com');
    expect(anchorElement).toHaveAttribute('title', 'Example Website');
    expect(anchorElement).toHaveAttribute('aria-label', 'Learn more about Example Website');
  });

  it('should not render the anchor link if href is not provided', () => {
    render(<AnchorLink>Click on me</AnchorLink>);
    const anchorElement = screen.queryByTestId("anchor-link");
    expect(anchorElement).not.toBeInTheDocument();
  });

  it('should not render the anchor link if children is not provided', () => {
    render(<AnchorLink href="#" />);
    const anchorElement = screen.queryByTestId("anchor-link");
    expect(anchorElement).not.toBeInTheDocument();
  });

});
